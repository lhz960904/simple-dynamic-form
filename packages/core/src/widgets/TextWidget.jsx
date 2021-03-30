import React from 'react';

export default function TextWidget({
  value,
  onChange,
  schema,
  uiSchema,
  disabled,
}) {
  return (
    <input
      disabled={disabled}
      type="text"
      value={value || ''}
      onChange={e => onChange(e.target.value)}
    />
  );
}
