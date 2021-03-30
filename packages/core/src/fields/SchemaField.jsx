import React from 'react';
import { getFieldComponent } from '../utils';

export default function SchemaField(props) {
  const {
    name,
    schema,
    errorSchema,
    formData,
    registry,
    onChange,
    disabled,
  } = props;

  const FieldComponent = getFieldComponent(schema, registry.fields);

  const field = (
    <FieldComponent
      {...props}
      name={name}
      formData={formData}
      onChange={onChange}
      schema={schema}
      disabled={disabled}
      errorSchema={errorSchema}
    />
  );

  return field;
}
