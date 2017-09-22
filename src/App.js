import React from 'react';
import './App.css';

import Lander from './components/Lander';
import Who from './components/Who';
import CodeProjects from './components/CodeProjects';
import Footer from './components/Footer';

const App = () => (
    <div className="App">
        <Lander />
        <Who />
        <CodeProjects />
        <Footer />
    </div>
);

export default App;
