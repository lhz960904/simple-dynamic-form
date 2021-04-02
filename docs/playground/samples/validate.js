export default {
  name: '校验',
  key: 'validate',
  schema: {
    type: 'object',
    properties: {
      requiredStr: {
        title: '必填项',
        type: 'string',
        required: true,
        message: '请填写必填项',
      },
      stringLen: {
        title: '字符长度效验',
        type: 'string',
        min: 2,
        max: 10,
      },
      numberLen: {
        title: '数值大小效验',
        type: 'number',
        min: 2,
        max: 10,
      },
      patternStr: {
        title: '正则校验',
        type: 'string',
        pattern: '^[A-Za-z0-9]+$',
      },
      rulesStr: {
        title: '传入rules',
        type: 'string',
        rules: [{ type: 'string', required: true, message: '这里是必填' }],
      },
      dependValidate: {
        title: '动态校验（联动）',
        type: 'string',
        required: '{{ rootValue.numberLen > 2 }}',
      },
    },
  },
  formData: {},
  uiSchema: {},
};
