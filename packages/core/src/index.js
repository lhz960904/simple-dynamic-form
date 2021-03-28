import React, { useEffect, useMemo } from 'react';
import { getDefaultRegistry } from './utils';
import useControllableValue from './hooks/useControllableValue';

export default function JsonForm(props) {
  console.log('receive props', props);

  const [formData, setFormData] = useControllableValue(props, {
    valuePropName: 'formData',
    trigger: 'onChange',
  });

  const { schema, uiSchema } = props;

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

  // 表单值有变动
  const handleChange = formData => setFormData(formData);

  const {
    fields: { SchemaField },
  } = registry;

  console.log('formData', formData);

  return (
    <form>
      <SchemaField
        registry={registry}
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onChange={handleChange}
      />
    </form>
  );
}
