import React, { Component } from 'react';
import '../Pages/App.css';
import Dashboard from '../Pages/Dashboard';
import Report from '../Pages/Report';
import AllReports from '../Pages/AllReports';
import Header from './Header';
import Message from '../Pages/Message';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserProfile from '../Pages/UserProfile';

class UserDashboard extends Component{

    render(){
        return (
            <div>
                <Header />
                <div className='ui fluid container' id='user-page'>
                    <div className='ui segment pushable'>
                        <div className='ui inverted vertical labeled icon ui overlay left thin visible sidebar menu'>
                            <h4>Tolu Adams</h4>
                            <Link to='/userdashboard/userprofile'><button className="ui yellow basic button">Edit Profile</button></Link>
                            <Link to='/userdashboard/' className='item'>
                                <i aria-hidden="true" className="dashboard icon" />
                                Dashboard
                            </Link>
                            <Link to='/userdashboard/report' className='item'>
                                <i aria-hidden='true' className='file alternate icon' />
                                Report
                            </Link>
                            <Link to='/userdashboard/allreports' className='item' >
                                <i aria-hidden='true' className='file alternate icon' />
                                Report History
                            </Link>
                            <Link to='/userdashboard/message' className='item'>
                                <i aria-hidden='true' className='envelope square icon' />
                                Message
                            </Link>
                            <Link to={`/help`} className='item'>
                                <i aria-hidden='true' className='help icon' />
                                Help
                            </Link>
                        </div>
                        <div className='pusher'>
                            <div className='ui basic segment' id='dashboard'>
                                <div className='ui secondary menu' id='menu-bar'>
                                    <i aria-hidden='true' className='hospital icon' />
                                    <div className='right menu'>
                                        <i aria-hidden='true' className='bell icon' />
                                        <i aria-hidden='true' className='setting icon' />
                                        <i aria-hidden='true' className='bookmark icon' />
                                    </div>
                                </div>
                                <Router>
                                    
                                    <Route exact path={`/userdashboard/`} component={Dashboard} />
                                    <Route path={`/userdashboard/userprofile`} component={UserProfile} />
                                    <Route path={`/userdashboard/report`} component={Report} />
                                    <Route path={`/userdashboard/allreports`} component={AllReports} />
                                    <Route path={`/userdashboard/message`} component={Message}/>
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
};
export default UserDashboard;