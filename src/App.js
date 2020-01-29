import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header'
import LandingPage from './Components/LandingPage';
import Signup from './Components/Signup';
import Signin from './Components/Signin';

const App = () => {
    return(
        <div>
            <BrowserRouter>
            <Header />
            <LandingPage />
            <Signup />
            <Signin />
            </BrowserRouter>
            
        </div>
    )
};
export default App;