export default {
  name: '禁用',
  key: 'disabled',
  // schema: {
  //   type: 'object',
  //   properties: {
  //     string: {
  //       title: '字符串1',
  //       type: 'string',
  //     },
  //     children: {
  //       disabled: true,
  //       type: 'object',
  //       properties: {
  //         string: {
  //           title: '字符串2',
  //           type: 'string',
  //         },
  //       },
  //     },
  //   },
  // },
  schema: {
    type: 'object',
    properties: {
      multipleChoicesList: {
        type: 'array',
        title: 'A multiple choices list',
        items: {
          type: 'string',
          enum: ['foo', 'bar', 'fuzz', 'qux'],
        },
        uniqueItems: true,
      },
    },
  },
  formData: {
    string: '哈哈哈',
    children: {
      string: '嘿嘿嘿',
    },
  },
  uiSchema: {
    multipleChoicesList: {
      'ui:widget': 'checkboxes',
    },
    items: {
      'ui:widget': 'checkboxes',
    },
  },
};
