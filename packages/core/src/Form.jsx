import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { getDefaultRegistry, validate, combineSchema } from './utils';
import useControllableValue from './hooks/useControllableValue';
import omit from 'lodash/omit';

import './index.less';

export default function Form(props) {
  console.log('receive props', props);

  const [formData, setFormData] = useControllableValue(props, {
    valuePropName: 'formData',
    trigger: 'onChange',
  });

  const [errorSchema, setErrorShema] = useState({});

  const {
    name,
    schema,
    uiSchema,
    children,
    prefixCls,
    disabled,
    container,
    containerProps,
    ...rest
  } = props;

  const othersProps = omit(rest, ['formData', 'onChange']);

  // todo 非受控时，schema有改变，formData需要重置下

  // 合并后的注册表
  const registry = useMemo(() => {
    const { fields, widgets, templates } = getDefaultRegistry();
    return {
      fields: { ...fields, ...props.fields },
      widgets: { ...widgets, ...props.widgets },
      templates: { ...templates, ...props.widgets },
    };
  }, [props.fields, props.widgets, props.widgets]);

  // 更新表单字段效验信息
  const updateValidation = () => {
    console.log('updateValidation', validate(schema, uiSchema, formData));
  };

  // 表单值有变动
  const handleChange = formData => {
    updateValidation();
    setFormData(formData);
  };

  const Container = container ? container : 'form';

  const {
    fields: { SchemaField },
  } = registry;

  const _schema = combineSchema(schema, uiSchema);
  console.log('formData', _schema);

  return (
    <Container {...othersProps} {...containerProps}>
      <SchemaField
        name={name}
        registry={registry}
        schema={_schema}
        errorSchema={errorSchema}
        formData={formData}
        disabled={disabled}
        onChange={handleChange}
      />
      {children}
    </Container>
  );
}

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  // 表单名称，title不存在时会使用name
  name: PropTypes.string,
  // 表单字段描述
  schema: PropTypes.shape({
    type: PropTypes.string,
  }),
  // 表单UI描述
  uiSchema: PropTypes.object,
  // 表单值
  formData: PropTypes.any,
  // 表单值改变时回调
  onChange: PropTypes.func,
  // 表单禁用
  disabled: PropTypes.bool,
  // 自定义效验
  validate: PropTypes.func,
  // 跳过组件自带校验
  noValidate: PropTypes.bool,
  // 提交回调
  onSubmit: PropTypes.func,
  // 校验失败回调
  onError: PropTypes.func,
  // 最外层容器，可以是标签名或组件
  container: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 外层容器接受的Props，防止与上面一些props重名。
  containerProps: PropTypes.object,
};
