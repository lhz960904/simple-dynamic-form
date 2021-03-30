import React from 'react';

export default function FieldTemplate(props) {
  const { required, children, label, description, errors, help } = props;

  return (
    <div className="form-field-item">
      <div className="form-field-item-label">
        <label>
          {label}
          <span className="label-desc"> {description}</span>
        </label>
      </div>
      <div className="form-field-item-control">{children}</div>
      {/* {errors} */}
    </div>
  );
}
