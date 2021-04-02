import React from 'react';
import JsonForm from '@jsonform/core';

export default function Preview({ values = {}, onFormDataChange }) {
  const { schema, uiSchema, formData } = values;

  return (
    <div>
      <JsonForm
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onChange={onFormDataChange}
        onSubmit={v =>
          console.log('%c 提交表单成功：', 'color: green;font-weight:bold;', v)
        }
        onError={v =>
          console.log('%c 表单校验失败：', 'color: #f00;font-weight:bold;', v)
        }
      >
        <button type="submit">提交</button>
      </JsonForm>
    </div>
  );
}
