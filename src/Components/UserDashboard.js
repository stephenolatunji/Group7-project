import React from 'react';
import '../Pages/App.css';
import Dashboard from '../Pages/Dashboard';
import Report from '../Pages/Report';
import AllReports from '../Pages/AllReports';
import Header from './Header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const UserDashboard = () => {
    return(
        <div>
            <Header />
            <div className='ui fluid container' id='user-page'>
                <div className="ui segment pushable">
                    <div className="ui inverted vertical labeled icon ui overlay left thin visible sidebar menu">
                        <h4>Tolu Adams</h4>
                        <button className="ui olive basic button">Edit Profile</button>
                        <Link to={`/userDashboard/`} class="item">
                            <i aria-hidden="true" className="dashboard icon"></i>
                            Dashboard
                    </Link>
                        <Link to={`/userDashboard/report`} class="item">
                            <i aria-hidden="true" className="file alternate icon"></i>
                            Report
                    </Link>
                        <Link to={`/userDashboard/message`} class="item">
                            <i aria-hidden="true" className="envelope square icon"></i>
                            Message
                    </Link>
                        <a class="item">
                            <i aria-hidden="true" className="help icon"></i>
                            Help
                    </a>
                    </div>
                    <div class="pusher">
                        <div class="ui basic segment" id='dashboard'>
                            <div className='ui menu' id='menu-bar'>
                                <i aria-hidden='true' className='hospital icon' />
                                <div className='ui icon input'>
                                    <i aria-hidden='true' className='search icon' />
                                    <input type='text' />
                                </div>
                                <div className='right menu'>
                                    <i aria-hidden='true' className='bell icon' />
                                    <i aria-hidden='true' className='setting icon' />
                                    <i aria-hidden='true' className='bookmark icon' />
                                </div>
                            </div>
                            <Router>
                                <Route exact path={`/userDashboard/`} component={Dashboard} />
                                <Route exact path={`/userDashboard/report`} component={Report} />
                                <Route exact path={`/userDashboard/allReports`} component={AllReports} />
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default UserDashboard;