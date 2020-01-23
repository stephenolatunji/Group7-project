import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import CallIcon from '@material-ui/icons/Call';
import MessageIcon from '@material-ui/icons/Message';

const Header = () => {
    return(
        <AppBar>
            <ToolBar
            style={{
                padding: 4,
                justifyContent: ''
            }}>
                <CallIcon />
                <span>Contact us</span>
                <MessageIcon />
                <span>Message us</span>
            </ToolBar>
        </AppBar>
    )
};
export default Header;