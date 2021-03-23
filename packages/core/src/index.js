import React, { useMemo } from 'react';
import { getDefaultRegistry } from './utils';

export default function JsonForm(props) {
  console.log('receive props', props);

  // 合并后的注册表
  const registry = useMemo(() => {
    const { fields, widgets, templates } = getDefaultRegistry();
    return {
      fields: { ...fields, ...props.fields },
      widgets: { ...widgets, ...props.widgets },
      templates: { ...templates, ...props.widgets },
    };
  }, [props.fields, props.widgets, props.widgets]);

  const {
    fields: { SchemaField },
  } = registry;

  return (
    <form>
      <SchemaField />
    </form>
  );
}
