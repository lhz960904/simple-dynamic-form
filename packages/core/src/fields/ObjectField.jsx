import React from 'react';
import get from 'lodash/get';

export default function ObjectField(props) {
  const {
    name,
    schema,
    value,
    formData,
    disabled,
    registry = {},
    onChange,
    errorSchema,
  } = props;

  const { fields, templates } = registry;

  const onPropertyChange = name => {
    return v => {
      console.log('Name', v, formData, value);
      const newFormData = { ...value, [name]: v };
      onChange(newFormData);
    };
  };

  const { SchemaField } = fields;

  const Template =
    schema['ui:ObjectFieldTemplate'] || templates.ObjectFieldTemplate;

  const properties = Object.keys(schema.properties || {});

  const templateProps = {
    title: schema.title === undefined ? name : schema.title,
    description: schema.description,
    schema,
    registry,
    disabled,
    formData,
    properties: properties.map(name => {
      // 对象结构，进行schema、value、拆解
      return {
        name,
        disabled,
        content: (
          <SchemaField
            key={name}
            name={name}
            registry={registry}
            disabled={disabled}
            schema={get(schema, `properties.${name}`)}
            errorSchema={get(errorSchema, name)}
            value={get(value, name)}
            formData={formData}
            onChange={onPropertyChange(name)}
          />
        ),
      };
    }),
  };

  return <Template {...templateProps} />;
}
