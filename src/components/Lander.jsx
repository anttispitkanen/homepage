/* Landing page component, full viewport size */
import React from 'react';
import MarkdownParser from '../MarkdownParser';
import './styles/Lander.css';

import Carousel from './Carousel';

const Lander = () => (
    <div className="lander">
        <Carousel />

        <MarkdownParser
            url="title.md"
            classNameProp="title"
        />
    </div>
);

export default Lander;
