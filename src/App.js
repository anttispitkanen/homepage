import React from 'react';
import './App.css';
import MarkdownParser from './MarkdownParser';
import Lander from './components/Lander';

const App = () => (
    <div className="App">
        <Lander />

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
