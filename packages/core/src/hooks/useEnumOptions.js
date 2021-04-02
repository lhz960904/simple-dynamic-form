import get from 'lodash/get';

/**
 * 根据schem enum、enumNames 生成options
 */
export default function useEnumOptions(schema) {
  // 构建optionList
  const enumValues = get(schema, 'enum', []);
  const enumNames = get(schema, 'enumNames', []);

  const optionList = enumValues.map((v, i) => ({
    label: enumNames[i] || v,
    value: v,
  }));

  return optionList;
}
