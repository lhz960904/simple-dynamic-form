import React, { useState } from 'react';
import { getWidget, validate, validateField } from '../utils';
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
    updateValidation,
    messageFormat,
    errors,
  } = props;

  const Widget = getWidget(schema, registry.widgets);

  const { templates } = registry;
  const Template = schema['ui:FieldTemplate'] || templates.FieldTemplate;

  const handleChange = v => {
    // 当前字段更新单独效验
    validate(schema, v, messageFormat)
      .then(() => {
        updateValidation(schema.$id, []);
      })
      .catch(({ errors }) => {
        updateValidation(schema.$id, errors);
      });
    onChange(v);
  };

  // 去除ui前缀，变成单独prop传递给widtet
  const {
    'ui:className': className,
    'ui:options': options = {},
    'ui:hidden': hidden,
    'ui:disabled': _disabled,
    'ui:readonly': _readOnly,
    required,
    rules = [], // rules可能存在required
  } = schema;

  const _fieldError = errors[schema.$id];

  const templateProps = {
    label: schema.title === undefined ? name : schema.title,
    description: schema.description,
    formData,
    errors: _fieldError,
    disabled,
    formData,
    schema,
    required: required || rules.some(r => r.required),
    registry,
  };

  const widgetProps = {
    options,
    className,
    required,
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
        errors={_fieldError}
        onChange={handleChange}
        {...widgetProps}
      />
    </Template>
  );
}
