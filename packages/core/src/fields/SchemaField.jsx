import React from 'react';
import { getFieldComponent } from '../utils';

export default function SchemaField(props) {
  const {
    name,
    schema,
    errors,
    value,
    formData,
    registry,
    onChange,
    messageFormat,
    updateValidation,
    disabled,
  } = props;

  const FieldComponent = getFieldComponent(schema, registry.fields);

  const field = (
    <FieldComponent
      {...props}
      name={name}
      value={value}
      formData={formData}
      onChange={onChange}
      schema={schema}
      disabled={disabled}
      messageFormat={messageFormat}
      updateValidation={updateValidation}
      errors={errors}
    />
  );

  return field;
}
