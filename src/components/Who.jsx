/* "Who am I" component */
import React from 'react';
import MarkdownParser from '../MarkdownParser';
import './styles/Who.css';

const Who = () => (
    <div className="Who">
        <MarkdownParser
            classNameProp="some-icons"
            url="some-icons.md"
        />

        <div className="who-row card">
            <img
                src="https://raw.githubusercontent.com/anttispitkanen/homepage-content/master/profile-poetkoe.jpg"
                alt="Antti Pitkänen"
            />

            <MarkdownParser
                url="whoami.md"
                classNameProp="who-am-i"
            />
        </div>

        <div className="mission-statement">
            <MarkdownParser
                url="mission.md"
                classNameProp=""
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
