import React, { Component } from 'react';
import '../Pages/App.css';
import Dashboard from '../Pages/Dashboard';
import Report from '../Pages/Report';
import AllReports from '../Pages/AllReports';
import Header from './Header';
import Message from '../Pages/Message';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class UserDashboard extends Component{

    render(){
        return (
            <div>
                <Header />
                <div className='ui fluid container' id='user-page'>
                    <div className="ui segment pushable">
                        <div className="ui inverted vertical labeled icon ui overlay left thin visible sidebar menu">
                            <h4>Tolu Adams</h4>
                            <button className="ui yellow basic button">Edit Profile</button>
                            <Link to={`/userdashboard/`} class="item">
                                <i aria-hidden="true" className="dashboard icon" />
                                Dashboard
                            </Link>
                            <Link to={`/userdashboard/report`} class="item">
                                <i aria-hidden="true" className="file alternate icon" />
                                Report
                            </Link>
                            <Link to='/userdashboard/allreports' class="item">
                                <i aria-hidden="true" className="file alternate icon" />
                                Report History
                            </Link>
                            <Link to={`/userdashboard/message`} class="item">
                                <i aria-hidden="true" className="envelope square icon" />
                                Message
                            </Link>
                            <Link to={`/help`} class="item">
                                <i aria-hidden="true" className="help icon" />
                                Help
                            </Link>
                        </div>
                        <div class="pusher">
                            <div class="ui basic segment" id='dashboard'>
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