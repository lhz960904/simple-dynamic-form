import toArray from 'lodash/toArray';
import useEnumOptions from './useEnumOptions';
import { parseValue } from '../utils';

/**
 * SelectWidget逻辑
 */
export default function useSelectWidget(props) {
  const { schema, disabled, readonly, value, options, onChange } = props;

  const optionList = useEnumOptions(schema);

  // multiple判断 array + enum
  const { type, items } = schema;
  const multiple = type === 'array' && items && optionList.length;

  // 值改变
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

    onChange(newValue);
  };

  return {
    value: multiple ? toArray(value) : value,
    disabled,
    options,
    readOnly: readonly,
    optionList,
    multiple,
    onChange: handleChange,
  };
}
