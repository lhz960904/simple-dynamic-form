import React from 'react';
import JsonForm from '@jsonform/core';

export default function Preview({ values = {}, onFormDataChange }) {
  const { schema, uiSchema, formData } = values;

  return (
    <div>
      <JsonForm
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onChange={onFormDataChange}
      />
    </div>
  );
}
