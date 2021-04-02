import React from 'react';

export default function ColorWidget({ value, onChange, disabled, options }) {
  return (
    <input
      {...options}
      type="color"
      disabled={disabled}
      value={value || '#000000'}
      onChange={e => onChange(e.target.value)}
    />
  );
}
