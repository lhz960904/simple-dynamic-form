import fields from './fields';
import widgets from './widgets';
import templates from './templates';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import cloneDeep from 'lodash/cloneDeep';
import toNumber from 'lodash/toNumber';
import defaultTo from 'lodash/defaultTo';
import isNil from 'lodash/isNil';
import Schema from 'async-validator';

const DEFULAT_TYPE_TO_FIELD = {
  array: 'ArrayField',
  object: 'ObjectField',
};

const DEFAULT_TYPE_TO_WIDGET = {
  boolean: 'CheckboxWidget',
  string: 'TextWidget',
  number: 'TextWidget',
  integer: 'TextWidget',
  array: 'SelectWidget',
};

/**
 * 获取默认注册表
 * fields、widgets、template
 */
export function getDefaultRegistry() {
  return { fields, widgets, templates };
}

/**
 * 获取schema的type
 */
export function getSchemaType(schema = {}) {
  let { type } = schema;
  if (!type && (schema.properties || schema.additionalProperties)) {
    return 'object';
  }
  return type;
}

/**
 * 合并Schema、uiSchema，生成$id, 俩者逻辑关联性大，简化内部处理
 * 理论上，直接舍弃uiSchema也可以
 */
export function combineSchema(schema = {}, uiSchema = {}, parentKey = 'root') {
  const properties = get(schema, 'properties', {});

  if (isEmpty(properties)) {
    return schema;
  }

  const newProperties = Object.entries(properties).reduce(
    (ret, [key, schema]) => {
      const { type, enum: options, properties: children, items } = schema;

      const $id = `${parentKey}.${key}`;
      schema.$id = $id;

      const isObj = Boolean(type === 'object' && children);
      // enum + array 代表的多选框，没有sub
      const isArr = Boolean(type === 'array' && items && !options);

      const ui = (key && uiSchema[key]) || {};

      // 如果是list，递归合并items
      if (isArr) {
        const newItems = combineSchema(items, ui.items || {}, $id);
        return { ...ret, [key]: { ...schema, ...ui, items: newItems } };
      }

      // object递归合并整个schema
      if (isObj) {
        const newSchema = combineSchema(schema, ui, $id);
        return { ...ret, [key]: { ...newSchema } };
      }

      return { ...ret, [key]: { ...schema, ...ui } };
    },
    {},
  );

  return { ...schema, properties: newProperties };
}

/**
 * 根据schema、fields、获取对应Widget
 */
export function getWidget(schema = {}, widgets) {
  const type = getSchemaType(schema);
  const { 'ui:widget': widgetKey } = schema;
  // 优先使用ui:widget
  let Widget;
  if (widgetKey) {
    Widget = widgets[widgetKey] || (() => `No widget: ${widgetKey}`);
    return Widget;
  }

  // enum、enumNames 下拉框
  if (Array.isArray(schema.enum)) {
    Widget = widgets.SelectWidget;
  }

  // 尝试通过type拿到默认类型
  if (!Widget) {
    Widget =
      widgets[DEFAULT_TYPE_TO_WIDGET[type]] ||
      (() => `No widget for type ${type}`);
  }

  return Widget;
}

/**
 * 判断字符串是否是函数表达式
 */
export function isFuncExpression(func) {
  if (typeof func !== 'string') {
    return false;
  }
  const expression = func.trim();
  if (expression.startsWith('{{') && expression.endsWith('}}')) {
    return true;
  }
  return false;
}

/**
 * 运行函数表达式，获取最终值
 */
export function evaluateString(item, formData, rootValue) {
  if (!isFuncExpression(item)) {
    return item;
  }

  const expression = item.trim();
  const code = expression.substring(2, expression.length - 2);
  return Function(`
    "use strict";
    const rootValue =${JSON.stringify(rootValue)};
    const formData = ${JSON.stringify(formData)};
    return (${code})
  `)();
}

/**
 * 函数表达式转换值
 * 可以传函数、函数表达式
 */
export function convertValue(item, formData = {}, rootValue = {}) {
  if (typeof item === 'function') {
    return item(formData, rootValue);
  }
  if (isFuncExpression(item)) {
    try {
      return evaluateString(item, formData, rootValue);
    } catch (error) {
      console.warn(error.message, `at ${item}`);
      return '';
    }
  }
  return item;
}

/**
 * 根据schema、fields、获取对应Field
 */
export function getFieldComponent(schema, fields) {
  const field = schema['ui:field'];
  if (typeof field === 'function') {
    return field;
  }
  if (typeof field === 'string' && field in fields) {
    return fields[field];
  }
  const componentName = DEFULAT_TYPE_TO_FIELD[getSchemaType(schema)];

  return fields[componentName] || fields.DefaultField;
}

/**
 * 递归规范化schema，ui:开头属性处理、联动处理
 * @param {*} schema 表单描述
 * @param {*} value 对应的表单值
 * @param {*} formData 全局表单值
 */
export function resolveSchema(schema, value, formData, rootValue) {
  if (!schema) {
    return schema;
  }

  schema = cloneDeep(schema);

  const properties = get(schema, 'properties', {});
  const items = get(schema, 'items', {});
  const recursion = arr =>
    Object.entries(arr).reduce(
      (ret, [key, schema]) => ({
        ...ret,
        [key]: resolveSchema(schema, get(value, key), formData, value),
      }),
      {},
    );

  if (Object.keys(properties).length) {
    schema.properties = recursion(properties);
  }
  if (Object.keys(items).length) {
    schema.items = recursion(items);
  }

  const convertKeys = [
    'default',
    'description',
    'ui:hidden',
    'ui:disabled',
    'ui:readonly',
    'pattern',
    'max',
    'min',
    'required',
  ];
  const options = schema['ui:options'] || {};

  convertKeys.forEach(key => {
    if (!schema[key]) {
      return;
    }
    schema[key] = convertValue(schema[key], formData, rootValue);
  });

  Object.entries(options).forEach(([k, v]) => {
    options[k] = convertValue(v, formData, rootValue);
  });

  return schema;
}

/**
 * 根据state的formData + scheme 规范最终的schema
 */
export function getDefaultFormState(schema, formData) {
  const newSchema = resolveSchema(schema, formData, formData);

  function createFormData(_schema, _value) {
    const { type, enum: options, properties, items } = _schema;

    const isObj = type === 'object' && properties;
    const isArr = type === 'array' && items && !options;

    // 没有下一级
    if (!isObj && !isArr) {
      return defaultTo(_value, _schema.default);
    }

    const ret = {};

    Object.entries(properties).forEach(([key, schema]) => {
      const v = createFormData(schema, get(_value, key));
      if (!isNil(v) && !schema['ui:hidden']) {
        ret[key] = v;
      }
    });

    return ret;
  }

  const result = createFormData(newSchema, formData);

  return result;
}

/**
 * 递归遍历schema，并获取对应formData, 交给handler处理
 */
export function recursionSchema(schema, formData, handler) {
  function recursion(_schema, _values, _key) {
    handler(_schema, _values, _key);
    if (_schema.properties) {
      Object.entries(_schema.properties).forEach(([k, s]) => {
        recursion(s, get(_values, k), k);
      });
    }
  }
  recursion(schema, formData);
}

// 生成待效验信息
function getValidateDescriptor(schema) {
  const { type, rules, message } = schema;
  if (rules) {
    return rules;
  } else {
    const someRules = ['pattern', 'max', 'min', 'required'].reduce((ret, k) => {
      if (!schema[k]) {
        return ret;
      }
      return [...ret, { type, [k]: schema[k], message }];
    }, []);
    if (someRules.length) {
      return someRules;
    }
  }
}

/**
 * 单独效验一个字段
 * @param {*} schema
 * @param {*} formData
 * @param {*} messageFormat
 */
export function validateField(schema, value, messageFormat) {
  const rules = getValidateDescriptor(_schema);
  getValidateData();
  // return [{ message: '哈哈哈 错误' }];
}

/**
 * 校验表单
 * @param {*} schema 表单schema
 * @param {*} formData 表单最新值
 */
export function validate(schema, formData, messageFormat = {}) {
  const newSchema = resolveSchema(schema, formData, formData);

  const verifyValues = {};
  const descriptor = {};

  recursionSchema(newSchema, formData, (_schema, _value) => {
    const rules = getValidateDescriptor(_schema);
    const { $id } = _schema;
    if (rules) {
      descriptor[$id] = rules;
      verifyValues[$id] = _value;
    }
  });

  // console.log('XXXXXXX', descriptor, verifyValues);

  const validator = new Schema(descriptor);
  validator.messages(messageFormat);

  return validator.validate(verifyValues);
}

// parse value类型，默认是string，可能是boolean、integer、number
export function parseValue(value, schema = {}) {
  const nums = new Set(['number', 'integer']);
  const { type, items } = schema;

  if (value === '') {
    return undefined;
  } else if (type === 'array' && items && nums.has(items.type)) {
    return value.map(toNumber);
  } else if (type === 'boolean') {
    return value === 'true';
  } else if (nums.has(type)) {
    return toNumber(value);
  } else {
    return value;
  }
}
