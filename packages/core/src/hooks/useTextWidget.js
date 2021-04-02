import toNumber from 'lodash/toNumber';

/**
 * TextWidget逻辑
 */
export default function useTextWidget(props) {
  const {
    value = '',
    disabled,
    readonly,
    onChange,
    schema,
    max,
    min,
    step,
    options,
  } = props;

  const nums = new Set(['number', 'integer']);
  const isNumber = nums.has(schema.type);
  const type = isNumber ? 'number' : schema.type || 'text';

  const handleChange = e => {
    onChange(isNumber ? toNumber(e.target.value) : e.target.value);
  };

  return {
    ...options,
    value,
    disabled,
    readOnly: readonly,
    type,
    max,
    min,
    step,
    minLength: min,
    maxLength: max,
    onChange: handleChange,
  };
}
