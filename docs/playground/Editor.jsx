import React, { useMemo } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { Row, Col } from 'antd';

// MonacoEditor 参数
const options = {
  minimap: { enabled: false },
  tabSize: 2,
  scrollBeyondLastLine: false,
  scrollbar: {
    verticalScrollbarSize: 5,
  },
};

// 转换成json string
const stringify = v => {
  try {
    return JSON.stringify(v, null, 2);
  } catch (error) {
    return {};
  }
};

const parse = s => {
  try {
    return JSON.parse(s);
  } catch (error) {
    return undefined;
  }
};

function EditorItem(props) {
  const { width, height, title, value, onChange, style } = props;

  return (
    <div className="playground-editor-item" style={style}>
      <header className="playground-editor-header">{title}</header>
      <MonacoEditor
        value={value}
        onChange={onChange}
        width={width}
        height={height}
        language="json"
        theme="vs"
        options={options}
      />
    </div>
  );
}

export default function Editor({ values = {}, onChange }) {
  // 获取code改变
  const getCodeChange = key => value => {
    console.log(key, value);
    onChange({
      ...values,
      [key]: parse(value),
    });
  };

  const schemaCode = stringify(values.schema);
  const schemaChange = getCodeChange('schema');

  const uiSchemaCode = stringify(values.uiSchema);
  const uiSchemaChange = getCodeChange('uiSchema');

  const formDataCode = stringify(values.formData);
  const formDataChange = getCodeChange('formData');

  console.log(values);
  return (
    <div>
      <EditorItem
        width="100%"
        height={300}
        title="schema"
        value={schemaCode}
        onChange={schemaChange}
      />
      <Row type="flex" style={{ marginTop: 8 }} gutter={8}>
        <Col span={12}>
          <EditorItem
            width="100%"
            height={250}
            title="uiSchema"
            value={uiSchemaCode}
            onChange={uiSchemaChange}
          />
        </Col>
        <Col span={12}>
          <EditorItem
            width="100%"
            height={250}
            title="formData"
            value={formDataCode}
            onChange={formDataChange}
          />
        </Col>
      </Row>
    </div>
  );
}
