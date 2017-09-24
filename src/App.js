import React from 'react';
import './App.css';

import Lander from './components/Lander';
import Who from './components/Who';
import CodeProjects from './components/CodeProjects';
import Community from './components/Community';
import Music from './components/Music';
import Footer from './components/Footer';

const App = () => (
    <div className="App">
        <Lander />
        <Who />
        <CodeProjects />
        <Community />
        <Music />
        <Footer />
    </div>
);

export default App;
