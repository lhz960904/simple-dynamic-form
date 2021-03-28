import { useCallback, useState, useRef, useEffect } from 'react';

/**
 * 受控/非受控 更好管理状态
 */
export default function useControllableValue(props, options) {
  const {
    defaultValue,
    defaultValuePropName = 'defaultValue',
    valuePropName = 'value',
    trigger = 'onChange',
  } = options;

  const isMounted = useRef(false);

  const value = props[valuePropName];

  const [state, setState] = useState(() => {
    // 受控
    if (valuePropName in props) {
      return value;
    }
    // 默认值
    if (defaultValuePropName in props) {
      return props[defaultValuePropName];
    }
    return defaultValue;
  });

  // 初始挂载时不需要
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      if (valuePropName in props) {
        setState(value);
      }
    }
  }, [value, valuePropName]);

  // 修改状态
  const handleSetState = useCallback(
    (v, ...args) => {
      // 非受控直接改变
      if (!(valuePropName in props)) {
        setState(v);
      }
      // 有onChange执行
      if (props[trigger]) {
        props[trigger](v, ...args);
      }
    },
    [props, valuePropName, trigger],
  );

  return [valuePropName in props ? value : state, handleSetState];
}
