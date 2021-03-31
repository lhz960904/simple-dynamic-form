import React from 'react';
import { getWidget, getWidgetProps, convertValue } from '../utils';
import defaultTo from 'lodash/defaultTo';

export default function DefaultField(props) {
  const {
    name,
    schema,
    value,
    formData,
    disabled,
    registry = {},
    onChange,
    errorSchema,
  } = props;

  const Widget = getWidget(schema, registry.widgets);

  const { templates } = registry;
  const Template = schema['ui:FieldTemplate'] || templates.FieldTemplate;

  const templateProps = {
    label: schema.title === undefined ? name : schema.title,
    description: schema.description,
    formData,
    errors: errorSchema,
    disabled,
    formData,
    schema,
    registry,
  };

  // 去除ui前缀，变成单独prop传递给widtet
  const {
    'ui:className': className,
    'ui:options': options = {},
    'ui:hidden': hidden,
    'ui:disabled': _disabled,
    'ui:readonly': _readOnly,
  } = schema;

  const widgetProps = {
    options,
    className,
    hidden: hidden,
    disabled: defaultTo(_disabled, disabled),
    readonly: defaultTo(_readOnly, false),
  };

  // 隐藏掉字段
  if (widgetProps.hidden) {
    return null;
  }

  return (
    <Template {...templateProps}>
      <Widget
        schema={schema}
        value={value}
        formData={formData}
        errorSchema={errorSchema}
        onChange={onChange}
        {...widgetProps}
      />
    </Template>
  );
}
