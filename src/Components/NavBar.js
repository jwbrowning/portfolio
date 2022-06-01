import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import HomePage from './home'
import FollowPage from './follow'
import OpeningsPage from './openings'

function NavBar() {
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