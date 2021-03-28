import React, { useRef } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { Row, Col } from 'antd';
import { useSize } from 'ahooks';

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
  const ref = useRef();
  const size = useSize(ref);

  console.log('size', size);

  const halfHeight = size.height / 2.5;

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
    <div style={{ height: '100%' }} ref={ref}>
      <EditorItem
        width="100%"
        height={size.height / 2}
        title="schema"
        value={values.schema}
        onChange={schemaChange}
      />
      <Row type="flex" style={{ marginTop: 8 }} gutter={8}>
        <Col span={12}>
          <EditorItem
            width="100%"
            height={size.height / 3}
            title="uiSchema"
            value={values.uiSchema}
            onChange={uiSchemaChange}
          />
        </Col>
        <Col span={12}>
          <EditorItem
            width="100%"
            height={size.height / 3}
            title="formData"
            value={values.formData}
            onChange={formDataChange}
          />
        </Col>
      </Row>
    </div>
  );
}
