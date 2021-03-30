import React from 'react';
import toNumber from 'lodash/toNumber';

export default function SliderWidget({
  value,
  onChange,
  schema,
  disabled,
  options,
}) {
  const type = schema.type || 'text';

  const { min, max, step } = schema;

  return (
    <input
      {...options}
      min={min}
      max={max}
      step={step}
      type="range"
      disabled={disabled}
      value={value || ''}
      onChange={e => onChange(toNumber(e.target.value))}
    />
  );
}
