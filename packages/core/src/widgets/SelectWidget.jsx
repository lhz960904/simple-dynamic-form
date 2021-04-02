import React from 'react';
import useSelectWidget from '../hooks/useSelectWidget';

export default function SelectWidget(props) {
  const {
    value,
    disabled,
    multiple,
    options,
    optionList,
    onChange,
  } = useSelectWidget(props);

  return (
    <select
      {...options}
      multiple={multiple}
      disabled={disabled}
      value={value}
      onChange={onChange}
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
