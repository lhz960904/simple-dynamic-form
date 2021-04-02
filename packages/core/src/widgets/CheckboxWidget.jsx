import React from 'react';

export default function CheckboxWidget({
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
      type="checkbox"
      disabled={disabled}
      checked={Boolean(value)}
      onChange={e => onChange(e.target.checked)}
    />
  );
}
