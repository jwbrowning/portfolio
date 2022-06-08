import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// const TRACKING_ID = 'UA-230577039-2';
// ReactGA.initialize(TRACKING_ID);

import HomePage from './home'
import FollowPage from './follow'
import OpeningsPage from './openings'

function NavBar() {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <div className='NavBar'>
            <Router>
                <nav>
                    <h2>Chess Assess</h2>
                    <ul className='nav-links'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='follow'>Follow Tournaments</Link>
                        </li>
                        <li>
                            <Link to='openings'>Opening Trainer</Link>
                        </li>
                    </ul>
                    <button style={{padding: '10px'}}
                            onClick={() => {
                                document.documentElement.style.setProperty('--hue', Math.floor(Math.random() * 360) + 'deg');
                                document.documentElement.style.setProperty('--sat', Math.floor(Math.random() * 200) + '%');
                                ReactGA.event({
                                    category: 'Navigation Bar',
                                    action: 'Changed Color'
                                });
                            }}>
                        <h3>Change Color</h3>
                    </button>
                </nav>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='follow' element={<FollowPage />} />
                    <Route path='openings' element={<OpeningsPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default NavBar;