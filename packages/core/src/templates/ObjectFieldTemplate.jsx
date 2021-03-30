import React from 'react';

export default function ObjectFieldTemplate(props) {
  const { title, description, disabled, properties } = props;

  return (
    <fieldset disabled={disabled} className="form-field-object">
      <legend className="form-field-object-label">
        <span className="form-field-object-title">{title}</span>
        <span className="form-field-object-desc"> {description}</span>
      </legend>
      <div className="form-field-object-content">
        {properties.map(prop => prop.content)}
      </div>
    </fieldset>
  );
}
