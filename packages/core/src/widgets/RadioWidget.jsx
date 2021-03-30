import get from 'lodash/get';
import toArray from 'lodash/toArray';
import toNumber from 'lodash/toNumber';
import React from 'react';

// parse value类型，默认是string，可能是boolean、integer、number
function parseValue(value, schema = {}) {
  const nums = new Set(['number', 'integer']);
  const { type, items } = schema;

  if (value === '') {
    return undefined;
  } else if (type === 'array' && items && nums.has(items.type)) {
    return value.map(toNumber);
  } else if (type === 'boolean') {
    return value === 'true';
  } else if (nums.has(type)) {
    return toNumber(value);
  } else {
    return value;
  }
}

export default function SelectWidget({
  value,
  onChange,
  schema,
  uiSchema,
  disabled,
  options,
  multiple,
}) {
  // 构建optionList
  const enumValues = get(schema, 'enum', []);
  const enumNames = get(schema, 'enumNames', []);
  const optionList = enumValues.map((v, i) => ({
    label: enumNames[i] || v,
    value: String(v),
  }));

  const currentValue = toArray(value);

  const handleChange = e => {
    const newValue = parseValue(e.target.value, schema);
    onChange(newValue);
  };

  return (
    <div>
      {optionList.map(option => {
        return (
          <span style={{ marginRight: 10 }} key={option.value}>
            <input
              type="radio"
              value={option.value}
              id={option.value}
              disabled={disabled}
              checked={String(value) === option.value}
              onChange={handleChange}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </span>
        );
      })}
    </div>
  );
}
