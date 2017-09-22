import React from 'react';
import MarkdownParser from '../MarkdownParser';
import './styles/Community.css';

const Community = () => (
    <div className="Community">
        <MarkdownParser
            url="community-intro.md"
            classNameProp="community-intro"
        />

        <MarkdownParser
            url="community.md"
            classNameProp="community"
        />
    </div>
);

export default Community;
