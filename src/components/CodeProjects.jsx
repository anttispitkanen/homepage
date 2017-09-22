import React from 'react';
import MarkdownParser from '../MarkdownParser';
import './styles/CodeProjects.css';

const CodeProjects = () => (
    <div className="CodeProjects">
        <MarkdownParser
            url="projects-intro.md"
            classNameProp="projects-intro"
        />

        <MarkdownParser
            url="projects.md"
            classNameProp="projects"
        />
    </div>
);

export default CodeProjects;
