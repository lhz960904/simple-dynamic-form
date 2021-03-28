export default {
  name: '简单示例',
  key: 'basic',
  schema: {
    type: 'object',
    properties: {
      string: {
        title: '字符串',
        type: 'string',
      },
      select: {
        title: '单选',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['选项1', '选项2', '选项3'],
      },
    },
  },
  formData: {
    string: '哈哈哈',
    select: 'a',
  },
};
