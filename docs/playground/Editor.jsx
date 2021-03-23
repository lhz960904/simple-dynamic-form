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
  automaticLayout: true,
};

function EditorItem(props) {
  const { width, height, title, value, onChange, style } = props;

  return (
    <div className="playground-editor-item" style={style}>
      <header className="playground-editor-header">{title}</header>
      <MonacoEditor
        value={value || '{}'}
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
    onChange({
      ...values,
      [key]: value,
    });
  };

  const schemaChange = getCodeChange('schema');
  const uiSchemaChange = getCodeChange('uiSchema');
  const formDataChange = getCodeChange('formData');

  return (
    <div>
      <EditorItem
        width="100%"
        height={300}
        title="schema"
        value={values.schema}
        onChange={schemaChange}
      />
      <Row type="flex" style={{ marginTop: 8 }} gutter={8}>
        <Col span={12}>
          <EditorItem
            width="100%"
            height={250}
            title="uiSchema"
            value={values.uiSchema}
            onChange={uiSchemaChange}
          />
        </Col>
        <Col span={12}>
          <EditorItem
            width="100%"
            height={250}
            title="formData"
            value={values.formData}
            onChange={formDataChange}
          />
        </Col>
      </Row>
    </div>
  );
}
