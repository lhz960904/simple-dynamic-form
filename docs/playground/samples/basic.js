export default {
  name: '简单示例',
  key: 'basic',
  schema: {
    title: '基础示例',
    description: '表单描述',
    type: 'object',
    properties: {
      string: {
        title: '字符串',
        description: '描述1',
        type: 'string',
      },
      select: {
        title: '单选',
        type: 'string',
        description: '描述2',
        enum: ['a', 'b', 'c'],
        enumNames: ['选项1', '选项2', '选项3'],
      },
      children: {
        type: 'object',
        properties: {
          string: {
            title: '字符串',
            description: '描述1',
            type: 'string',
          },
        },
      },
    },
  },
  formData: {
    string: '字符串',
    select: 'a',
  },
  uiSchema: {
    select: {
      'ui:widget': 'SelectWidget',
    },
  },
};
