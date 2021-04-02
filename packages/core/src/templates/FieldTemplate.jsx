import React from 'react';
import get from 'lodash/get';

export default function FieldTemplate(props) {
  const { required, children, label, description, errors, help } = props;

  return (
    <div className="form-field-item">
      <div className="form-field-item-label">
        <label>
          {required && '*'}
          {label}
          <span className="label-desc"> {description}</span>
        </label>
      </div>
      <div className="form-field-item-control">
        <div>{children}</div>
        {errors && (
          <div className="form-field-error">{get(errors, '[0].message')}</div>
        )}
      </div>
    </div>
  );
}
