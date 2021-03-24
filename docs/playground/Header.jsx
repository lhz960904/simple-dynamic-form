import React, { useEffect } from 'react';
import { Radio } from 'antd';

export default function Header({
  sampleItems = [],
  sampleKey,
  onSampleChange,
}) {
  return (
    <div>
      <Radio.Group
        value={sampleKey}
        onChange={e => onSampleChange(e.target.value)}
      >
        {sampleItems.map(item => (
          <Radio value={item.key} key={item.key}>
            {item.name}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
}
