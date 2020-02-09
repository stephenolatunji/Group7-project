import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import CallIcon from '@material-ui/icons/Call';
import MessageIcon from '@material-ui/icons/Message';
import '../Pages/App.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <AppBar className='app'>
            <ToolBar
            style={{
                padding: 4,
                justifyContent: ''
            }}>
                <CallIcon />
                <span>Contact us</span>
                <MessageIcon />
                <span>Message us</span>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/userDashboard'>Dashboard</Link></li>
                    <li><Link to='/signIn'>SignIn</Link></li>
                </ul>
            </nav>
            </ToolBar>
        </AppBar>
    )
};
export default Header;