import React from 'react';
import toNumber from 'lodash/toNumber';

const nums = new Set(['number', 'integer']);

export default function TextWidget({
  value,
  onChange,
  schema,
  uiSchema,
  disabled,
  options,
}) {
  const type = nums.has(schema.type) ? 'number' : 'text';

  const handleChange = e => {
    if (type === 'number') {
      onChange(toNumber(e.target.value));
    } else {
      onChange(e.target.value);
    }
  };

  return (
    <input
      type={type}
      {...options}
      disabled={disabled}
      value={value || ''}
      onChange={handleChange}
    />
  );
}
