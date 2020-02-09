import React, { Component } from 'react';
import LandingPage from './Components/LandingPage';
import UserDashboard from './Components/UserDashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/userDashboard' component={UserDashboard} />
            </Router>
        )
    }
};
export default App;