import React from 'react';
import MarkdownParser from '../MarkdownParser';
import './styles/Footer.css';

const Footer = () => (
    <footer className="footer">
        <MarkdownParser
            classNameProp="some-icons"
            url="some-icons.md"
        />

        <MarkdownParser
            classNameProp="copyright"
            url="copyright.md"
        />

        <MarkdownParser
            classNameProp="photocredit"
            url="photocredit.md"
        />
    </footer>
);

export default Footer;
