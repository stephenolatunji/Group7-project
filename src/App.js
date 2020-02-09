import React from 'react';
import Header from './Components/Header'
import LandingPage from './Components/LandingPage';
import UserDashboard from './Components/UserDashboard';


const App = () => {
    return(
        <div>
            <Header />
            <LandingPage />
            <UserDashboard />
        </div>
    )
};
export default App;