import React from 'react';
import MarkdownParser from '../MarkdownParser';

import './styles/Writing.css';

const Writing = () => (
  <div className="Writing">
    <MarkdownParser url="writing.md" classNameProp="writing" />
  </div>
);

export default Writing;
