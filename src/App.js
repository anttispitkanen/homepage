import React from 'react';
import './App.css';

import Lander from './components/Lander';
import Who from './components/Who';
import Footer from './components/Footer';

const App = () => (
    <div className="App">
        <Lander />
        <Who />
        <Footer />
    </div>
);

export default App;
