import React from 'react';

export default function TextWidget({ value, onChange, schema, uiSchema }) {
  return (
    <input
      type="text"
      value={value || ''}
      onChange={e => onChange(e.target.value)}
    />
  );
}
