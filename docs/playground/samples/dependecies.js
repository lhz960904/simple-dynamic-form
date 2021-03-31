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
          x2: {
            title: '输入框2',
            type: 'string',
            'ui:hidden': '{{!rootValue.showMore}}',
          },
          obj: {
            type: 'object',
            properties: {
              string: {
                title: 'stirng',
                description: '{{ formData.case1.showMore ? `true` : `false` }}',
                type: 'string',
              },
            },
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
              addonBefore: "{{rootValue.bi === 'rmb'? '￥':'$'}}",
              addonAfter: "{{rootValue.bi === 'rmb'? '元':'美元'}}",
            },
          },
        },
      },
    },
  },
  formData: {},
  uiSchema: {},
};
