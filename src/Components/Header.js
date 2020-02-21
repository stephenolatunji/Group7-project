import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import '../Pages/App.css';
import { Link } from 'react-router-dom';
import { Crest } from '../Assets/all-icons'

const Header = () => {
    return (
        <AppBar className='header'>
            <ToolBar
                style={{
                    padding: 4,
                    backgroundColor: '#000',
                    justifyContent: 'space-between'
                }}>
                <nav>
                    <div className='nav'>
                        <Crest fill='white' height='40px' width='40px' />
                            CREST
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/userdashboard'>Dashboard</Link></li>
                            <li><Link to='/sign up' role='button' className='sign-button'>Sign Up</Link></li>
                            <li><Link to='/sign In' role='button' className='sign-button'>Sign In</Link></li>
                        </ul>
                    </div>
                </nav>
            </ToolBar>
        </AppBar>
    )
};
export default Header;