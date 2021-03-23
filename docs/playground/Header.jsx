import React, { useEffect } from 'react';
import { Radio } from 'antd';
import basic from './samples/basic';

const sampleItems = [basic];

export default function Header({ value, onChange }) {
  useEffect(() => {
    const current = sampleItems.find(i => i.key === value);
    if (current && onChange) {
      onChange(current);
    }
  }, []);

  return (
    <div>
      <Radio.Group value={value}>
        {sampleItems.map(item => (
          <Radio value={item.key} key={item.key}>
            {item.name}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
}
