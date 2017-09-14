import React from 'react';
import './App.css';
import MarkdownParser from './MarkdownParser';

const App = () => (
    <div className="App">
        Fetchattu markdown:<br />

        <MarkdownParser
            url="testi.md"
            classNameProp="red"
        />

        <MarkdownParser
            url="testi.md"
            classNameProp="blue"
        />
    </div>
);

export default App;
