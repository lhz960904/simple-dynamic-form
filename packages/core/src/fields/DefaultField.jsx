import React from 'react';
import { getWidget } from '../utils';

export default function DefaultField(props) {
  const {
    name,
    schema,
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
    errors: errorSchema,
    disabled,
    formData,
    schema,
    registry,
  };

  return (
    <Template {...templateProps}>
      <Widget
        disabled={disabled}
        schema={schema}
        value={formData}
        errorSchema={errorSchema}
        onChange={onChange}
      />
    </Template>
  );
}
