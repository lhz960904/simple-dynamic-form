import React from 'react';
import { getSchemaType, getWidget } from '../utils';

export default function SchemaField(props) {
  const { schema, uiSchema, formData, registry, onChange } = props;

  const type = getSchemaType(schema);

  if (type !== 'object') {
    const Widget = getWidget(schema, uiSchema, registry.widgets);

    return (
      <Widget
        schema={schema}
        uiSchema={uiSchema}
        value={formData}
        onChange={onChange}
      />
    );
  }

  const properties = Object.keys(schema.properties || {});

  const onPropertyChange = name => {
    return value => {
      const newFormData = { ...formData, [name]: value };
      onChange(newFormData);
    };
  };

  // 对象结构，进行schema、Schema、formData、拆解
  return properties.map(name => {
    // const  schema={}
    return (
      <SchemaField
        key={name}
        registry={registry}
        schema={schema.properties[name]}
        uiSchema={uiSchema[name]}
        formData={formData[name]}
        onChange={onPropertyChange(name)}
      />
    );
  });
}
