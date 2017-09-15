/* "Who am I" component */
import React from 'react';
import MarkdownParser from '../MarkdownParser';
import './styles/Who.css';

const Who = () => (
    <div className="Who">
        <div className="who-row card">
            <img src="https://instagram.fqlf1-1.fna.fbcdn.net/t51.2885-15/e35/18579584_1423304657728138_16347818054647808_n.jpg" alt="Antti Pitkänen" />

            <MarkdownParser
                url="whoami.md"
                classNameProp="who-am-i"
            />
        </div>

        <div className="who-row">
            <MarkdownParser
                url="skills.md"
                classNameProp="skills"
            />

            <MarkdownParser
                url="interests.md"
                classNameProp="interests"
            />
        </div>

        <div className="who-row">
            <MarkdownParser
                url="contact.md"
                classNameProp="contact"
            />
        </div>
    </div>
);

export default Who;
