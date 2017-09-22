/* Landing page component, full viewport size */
import React from 'react';
import MarkdownParser from '../MarkdownParser';
import './styles/Lander.css';

const Lander = () => (
    <div className="lander">
        <MarkdownParser
            url="title.md"
            classNameProp="title"
        />
    </div>
);

export default Lander;
