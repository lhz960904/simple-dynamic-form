export default {
  name: '联动',
  key: 'dependecies',
  schema: {
    type: 'object',
    properties: {
      case1: {
        title: '整体隐藏',
        type: 'object',
        properties: {
          showMore: {
            title: '显示更多',
            type: 'boolean',
          },
          x1: {
            title: '输入框1',
            type: 'string',
            'ui:hidden': '{{!rootValue.showMore}}',
          },
          enum: {
            type: 'array',
            enum: ['a', 'b', 'c '],
          },
          x2: {
            title: '输入框2',
            type: 'string',
            'ui:hidden': '{{rootValue.enum !== "a"}}',
          },
        },
      },
      case2: {
        title: '选项联动',
        type: 'object',
        properties: {
          bi: {
            title: '汇款币种',
            type: 'string',
            enum: ['rmb', 'dollar'],
            enumNames: ['人民币', '美元'],
          },
          inputName: {
            title: '金额',
            description:
              "{{rootValue.bi === 'dollar' ? '一次汇款不超过150美元':'一次汇款不超过1000元'}}",
            type: 'string',
            'ui:options': {
              placeholder:
                "{{rootValue.bi === 'dollar' ? '一次汇款不超过150美元':'一次汇款不超过1000元'}}",
            },
          },
        },
      },
    },
  },
  formData: {},
  uiSchema: {},
};
