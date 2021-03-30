import React from 'react';

export default function ColorWidget({
  value,
  onChange,
  schema,
  uiSchema,
  disabled,
  options,
}) {
  return (
    <input
      {...options}
      type="color"
      disabled={disabled}
      value={value || ''}
      onChange={e => onChange(e.target.value)}
    />
  );
}
