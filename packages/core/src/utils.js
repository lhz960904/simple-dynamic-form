import fields from './fields';
import widgets from './widgets';
import templates from './templates';

const widgetMap = {
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
 * 根据schema、uiSchema、fields、获取对应Widget
 */
export function getWidget(schema = {}, uiSchema = {}, widgets) {
  const type = getSchemaType(schema);
  if (!type) {
    return () => null;
  }
  const { 'ui:widget': widgetKey } = uiSchema;
  // 优先用uiSchema定义的widet
  const Widget = widgets[widgetKey] || widgets[widgetMap[type]];

  if (typeof Widget === 'function') {
    return Widget;
  }

  return () => null;
}

/**
 * 根据schema、uiSchema、fields、获取对应Field
 */
export function getFieldComponent(schema, uiSchema, fields) {}
