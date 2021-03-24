import React, { useMemo } from 'react';
import { getDefaultRegistry } from './utils';

export default function JsonForm(props) {
  console.log('receive props', props);

  const { schema, uiSchema, formData, onChange } = props;

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
  const handleChange = formData => {
    if (typeof onChange === 'function') {
      onChange(formData);
    }
  };

  const {
    fields: { SchemaField },
  } = registry;

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
