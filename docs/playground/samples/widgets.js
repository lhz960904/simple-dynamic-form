export default {
  name: '基础控件',
  key: 'widgets',
  schema: {
    type: 'object',
    properties: {
      stringObj: {
        type: 'object',
        title: 'String类型',
        properties: {
          input: {
            type: 'string',
            title: '简单输入框',
          },
          textarea: {
            type: 'string',
            title: '简单文本域',
          },
          color: {
            title: '颜色选择',
            type: 'string',
          },
        },
      },
      numberObj: {
        type: 'object',
        title: 'Number类型',
        properties: {
          number1: {
            type: 'number',
            title: '数字输入框',
          },
          number2: {
            type: 'number',
            title: '滑动条',
          },
        },
      },
      booleanObj: {
        type: 'object',
        title: 'Boolean类型',
        properties: {
          radio: {
            title: '是否通过',
            type: 'boolean',
          },
        },
      },
      enumObj: {
        type: 'object',
        title: '选择类',
        properties: {
          select1: {
            title: '单选-字符串',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['早', '中', '晚'],
          },
          select2: {
            title: '单选-数值',
            type: 'number',
            enum: [1, 2, 3],
            enumNames: ['早', '中', '晚'],
          },
          select3: {
            title: '单选-布尔值',
            type: 'boolean',
            enum: [true, false],
            enumNames: ['是', '否'],
          },
          select4: {
            title: '单选',
            description: 'radio',
            type: 'boolean',
            enum: [true, false],
            enumNames: ['是', '否'],
          },
          multiSelect: {
            title: '多选',
            description: '下拉多选',
            type: 'array',
            items: {
              type: 'string',
            },
            enum: ['A', 'B', 'C', 'D'],
            enumNames: ['杭州', '武汉', '湖州', '贵阳'],
          },
          boxes: {
            title: '多选',
            description: 'checkbox',
            type: 'array',
            items: {
              type: 'string',
            },
            enum: ['A', 'B', 'C', 'D'],
            enumNames: ['杭州', '武汉', '湖州', '贵阳'],
          },
        },
      },
    },
  },
  // formData: {
  //   string: '字符串',
  //   select: 'a',
  // },
  uiSchema: {
    stringObj: {
      textarea: {
        'ui:widget': 'TextareaWidget',
      },
      color: {
        'ui:widget': 'ColorWidget',
      },
    },
    numberObj: {
      number2: {
        'ui:widget': 'SliderWidget',
      },
    },
    enumObj: {
      boxes: {
        'ui:widget': 'CheckboxsWidget',
      },
      select4: {
        'ui:widget': 'RadioWidget',
      },
    },
  },
};
