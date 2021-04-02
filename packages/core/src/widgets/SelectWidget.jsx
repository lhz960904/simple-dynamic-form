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
}) {
  // 构建optionList
  const enumValues = get(schema, 'enum', []);
  const enumNames = get(schema, 'enumNames', []);
  const optionList = enumValues.map((v, i) => ({
    label: enumNames[i] || v,
    value: v,
  }));

  // multiple判断 array + enum
  const { type, items } = schema;
  const multiple = type === 'array' && items && enumValues.length;

  const handleChange = e => {
    let newValue;
    // 多选是数组
    if (multiple) {
      newValue = [...e.target.options]
        .filter(o => o.selected)
        .map(o => o.value);
    } else {
      newValue = e.target.value;
    }

    newValue = parseValue(newValue, schema);

    console.log('anewValue', newValue);

    onChange(newValue);
  };

  return (
    <select
      {...options}
      multiple={multiple}
      disabled={disabled}
      value={multiple ? toArray(value) : value}
      onChange={handleChange}
    >
      {!multiple && <option value="">请选择</option>}
      {optionList.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
