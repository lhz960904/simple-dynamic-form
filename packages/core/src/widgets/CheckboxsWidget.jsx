import get from 'lodash/get';
import toArray from 'lodash/toArray';
import React from 'react';
import useEnumOptions from '../hooks/useEnumOptions';
import { parseValue } from '../utils';

export default function SelectWidget({
  value,
  onChange,
  schema,
  uiSchema,
  disabled,
  options,
  multiple,
}) {
  const optionList = useEnumOptions(schema);

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
