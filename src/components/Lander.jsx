/* Landing page component, full viewport size */
import React from 'react';
import MarkdownParser from '../MarkdownParser';
import './styles/Lander.css';

const Lander = () => (
    <MarkdownParser
        url="testi.md"
        classNameProp="lander"
    />
);

export default Lander;
