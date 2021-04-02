import React from 'react';

export default function TextareaWidget({
  value,
  onChange,
  disabled,
  readonly,
  options,
}) {
  return (
    <textarea
      {...options}
      readOnly={readonly}
      disabled={disabled}
      value={value || ''}
      onChange={e => onChange(e.target.value)}
    />
  );
}
