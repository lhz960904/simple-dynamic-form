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
    value: v,
  }));

  const currentValue = toArray(value);

  const handleChange = e => {
    let newValue = [];
    if (e.target.checked) {
      newValue = [...currentValue, e.target.value];
    } else {
      newValue = currentValue.filter(v => v !== e.target.value);
    }

    newValue = parseValue(newValue, schema);

    onChange(newValue);
  };

  return (
    <div>
      {optionList.map(({ label, value }, idx) => {
        const checked = currentValue.indexOf(value) !== -1;

        return (
          <span style={{ marginRight: 10 }} key={value}>
            <input
              type="checkbox"
              value={value}
              id={value}
              disabled={disabled}
              checked={checked}
              onChange={handleChange}
            />
            <label htmlFor={value}>{label}</label>
          </span>
        );
      })}
    </div>
  );
}
