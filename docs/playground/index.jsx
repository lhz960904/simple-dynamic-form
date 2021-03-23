import React, { useState, useEffect } from 'react';
import Header from './Header';
import Editor from './Editor';
import Preview from './Preview';
import { Row, Col, Divider } from 'antd';
import basic from './samples/basic';

import 'antd/dist/antd.css';
import './style.less';

const sampleItems = [basic];

function stringify(obj) {
  return ['schema', 'uiSchema', 'formData'].reduce((ret, k) => {
    try {
      return {
        ...ret,
        [k]: JSON.stringify(obj[k] || {}, null, 2),
      };
    } catch (error) {
      console.warn(`[Stringify Error]`, obj[k]);
      return { ...ret, [k]: '{}' };
    }
  }, {});
}

function parse(obj) {
  return Object.keys(obj).reduce((ret, k) => {
    try {
      return {
        ...ret,
        [k]: JSON.parse(obj[k]),
      };
    } catch (error) {
      console.warn(`[Parse Error]`, obj[k]);
      return ret;
    }
  }, {});
}

export default function Playground() {
  const [sampleKey, setSampleKey] = useState();

  const [values, setValues] = useState({});

  // 默认第一个示例
  useEffect(() => {
    if (sampleItems.length) {
      setSampleKey(sampleItems[0].key);
      setValues(stringify(sampleItems[0]));
    }
  }, []);

  // 示例切换
  function handleSampleChange(k) {
    setSampleKey(k);
    const current = sampleItems.find(i => i.key === value);
    if (current) {
      setValues(stringify(current));
    }
  }

  return (
    <div className="page-playground">
      <div>
        <Header
          sampleKey={sampleKey}
          onSampleChange={handleSampleChange}
          sampleItems={sampleItems}
        />
        <Divider />
      </div>
      <div>
        <Row className="playground-content" type="flex">
          <Col style={{ padding: 8, flex: 1 }}>
            <Editor values={values} onChange={v => setValues(v)} />
          </Col>
          <Divider type="vertical" />
          <Col style={{ padding: 8, flex: 1 }}>
            <Preview values={parse(values)} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
