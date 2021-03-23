import React, { useState, useEffect } from 'react';
import Header from './Header';
import Editor from './Editor';
import Preview from './Preview';
import { Row, Col, Divider } from 'antd';
import basic from './samples/basic';

import 'antd/dist/antd.css';
import './style.less';

const sampleItems = [basic];

export default function Playground() {
  const [sampleKey, setSampleKey] = useState();

  const [values, setValues] = useState({
    schema: {},
    uiSchema: {},
    formData: {},
  });

  // 默认第一个示例
  useEffect(() => {
    if (sampleItems.length) {
      setSampleKey(sampleItems[0].key);
      setValues(sampleItems[0]);
    }
  }, []);

  // 示例切换
  function handleSampleChange(k) {
    setSampleKey(k);
    const current = sampleItems.find(i => i.key === value);
    if (current) {
      setValues(current);
    }
  }

  return (
    <Row className="page-playground" type="flex">
      <Col>
        <Header
          sampleKey={sampleKey}
          onSampleChange={handleSampleChange}
          sampleItems={sampleItems}
        />
        <Divider />
      </Col>
      <Col style={{ flex: '1' }}>
        <Row className="playground-content">
          <Col style={{ padding: 8 }}>
            <Editor values={values} onChange={() => {}} />
          </Col>
          <Divider type="vertical" />
          <Col style={{ padding: 8 }}>
            <Preview />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
