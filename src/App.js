import React from 'react';
import ReactGA from 'react-ga';
import Portfolio from './Components/Portfolio';
import ChessPortfolio from './Components/ChessPortfolio';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';

import './App.css';

const TRACKING_ID = 'UA-230577039-3';
ReactGA.initialize(TRACKING_ID);


function App() {
  return(
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='/chess' element={<ChessPortfolio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
