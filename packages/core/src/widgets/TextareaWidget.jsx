import React from 'react';

export default function TextareaWidget({
  value,
  onChange,
  schema,
  uiSchema,
  disabled,
  options,
}) {
  return (
    <textarea
      {...options}
      disabled={disabled}
      value={value || ''}
      onChange={e => onChange(e.target.value)}
    />
  );
}
