import React from 'react';
import ReactGA from 'react-ga';
import Portfolio from './Components/Portfolio';

import './App.css';

const TRACKING_ID = 'UA-230577039-3';
ReactGA.initialize(TRACKING_ID);


function App() {
  return(
    <div className='app'>
      <Portfolio />
    </div>
  );
}

export default App;
