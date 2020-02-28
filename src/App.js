import React from 'react';
import LandingPage from './Components/LandingPage';
import UserDashboard from './Components/UserDashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';


const App = () => {
   
    return (
        <Router>
            <Route exact path='/' component={LandingPage} />
            <Route path='/userdashboard' component={UserDashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
        </Router>
    )
    
};
export default App;