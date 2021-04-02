import React from 'react';
import useTextWidget from '../hooks/useTextWidget';

export default function TextWidget(props) {
  const processProps = useTextWidget(props);

  return <input {...processProps} />;
}
