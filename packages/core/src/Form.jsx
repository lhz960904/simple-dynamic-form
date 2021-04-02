import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  getDefaultRegistry,
  validate,
  resolveSchema,
  getDefaultFormState,
  combineSchema,
} from './utils';
import useControllableValue from './hooks/useControllableValue';
import omit from 'lodash/omit';

import './index.less';

export default function Form(props) {
  const [formData, setFormData] = useControllableValue(props, {
    valuePropName: 'formData',
    trigger: 'onChange',
  });

  const [errors, setErrors] = useState({});

  const {
    name,
    schema,
    uiSchema,
    children,
    prefixCls,
    disabled,
    container,
    containerProps,
    messageFormat,
    onError,
    onSubmit,
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
  const updateValidation = (id, errs) => {
    // errors里存在替换，否则添加
    setErrors(prev => ({
      ...prev,
      [id]: errs,
    }));
  };

  const mixSchema = combineSchema(schema, uiSchema);

  // 表单值有变动
  const handleChange = formData => {
    // 拿到schema对应的formData
    const newFormData = getDefaultFormState(mixSchema, formData);
    // 更新校验信息
    updateValidation(mixSchema, newFormData);
    setFormData(newFormData);
  };

  const Container = container ? container : 'form';

  const {
    fields: { SchemaField },
  } = registry;

  const _schema = resolveSchema(mixSchema, formData, formData);

  // 提交
  function handleSubmit(e) {
    e.preventDefault();
    validate(_schema, formData, messageFormat)
      .then(() => {
        setErrors({});
        if (typeof onSubmit === 'function') {
          onSubmit(formData);
        }
      })
      .catch(({ fields }) => {
        setErrors(fields);
        if (typeof onError === 'function') {
          onError(fields, schema, formData);
        }
      });
  }

  return (
    <Container onSubmit={handleSubmit} {...othersProps} {...containerProps}>
      <SchemaField
        name={name}
        registry={registry}
        schema={_schema}
        errors={errors}
        value={formData}
        formData={formData}
        disabled={disabled}
        messageFormat={messageFormat}
        updateValidation={updateValidation}
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
  // 效验错误文案的format
  messageFormat: PropTypes.object,
  // 提交回调
  onSubmit: PropTypes.func,
  // 校验失败回调
  onError: PropTypes.func,
  // 最外层容器，可以是标签名或组件
  container: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 外层容器接受的Props，防止与上面一些props重名。
  containerProps: PropTypes.object,
};
