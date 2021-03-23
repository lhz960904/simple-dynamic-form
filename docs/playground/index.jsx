import React, { useState } from 'react';
import Header from './Header';
import { Row, Col, Divider } from 'antd';

import 'antd/dist/antd.css';

import './style.less';

export default function Playground() {
  const [selectedKey, setSelectedKey] = useState('basic');

  function handleSampleChange(data) {
    console.log('heihei1', data);
  }

  return (
    <Row className="page-playground">
      <Col></Col>
      <Header value={selectedKey} onChange={handleSampleChange} />
      <Divider />
      <Row className="playground-content">
        <Col flex={1}>1</Col>
        <Divider type="vertical" />
        <Col flex={1}>2</Col>
      </Row>
    </Row>
  );
}
