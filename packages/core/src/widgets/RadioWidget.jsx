import get from 'lodash/get';
import toArray from 'lodash/toArray';
import React from 'react';
import { parseValue } from '../utils';
import useEnumOptions from '../hooks/useEnumOptions';

export default function RadioWidget({ value, onChange, schema, disabled }) {
  const optionList = useEnumOptions(schema);

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
              id={String(option.value)}
              disabled={disabled}
              checked={value === option.value}
              onChange={handleChange}
            />
            <label htmlFor={String(option.value)}>{option.label}</label>
          </span>
        );
      })}
    </div>
  );
}
