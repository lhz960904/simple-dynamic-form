import fields from './fields';
import widgets from './widgets';
import templates from './templates';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

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
 * 合并Schema、uiSchema，俩者逻辑关联性大，简化内部处理
 * 理论上，直接舍弃uiSchema也可以
 */
export function combineSchema(schema = {}, uiSchema = {}) {
  const properties = get(schema, 'properties', {});

  if (isEmpty(properties)) {
    return schema;
  }

  const newProperties = Object.entries(properties).reduce(
    (ret, [key, schema]) => {
      const { type, enum: options, properties: children, items } = schema;

      const isObj = type === 'object' && children;
      // enum + array 代表的多选框，没有sub
      const isArr = type === 'array' && items && !options;

      const ui = key && uiSchema[key];
      if (!ui) {
        return { ...ret, [key]: schema };
      }

      // 如果是list，递归合并items
      if (isArr) {
        const newItems = combineSchema(items, ui.items || {});
        return { ...ret, [key]: { ...schema, ...ui, items: newItems } };
      }

      // object递归合并整个schema
      if (isObj) {
        const newSchema = combineSchema(schema, ui);
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

export function validate(schema, formData) {
  // const checkt
}
