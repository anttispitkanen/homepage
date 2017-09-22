import React from 'react';
import './App.css';

import Lander from './components/Lander';
import Who from './components/Who';
import CodeProjects from './components/CodeProjects';
import Community from './components/Community';
import Footer from './components/Footer';

const App = () => (
    <div className="App">
        <Lander />
        <Who />
        <CodeProjects />
        <Community />
        <Footer />
    </div>
);

export default App;
