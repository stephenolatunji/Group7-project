import React from 'react';
import './App.css'

const Message = () => {
    return(
        <div className='ui container' id='message-container'>
            <div className='ui form'>
                <label>Send Us a Message</label>
                <textarea placeholder='Type here' rows='12'/>
                <button className='ui orange inverted button' type='submit'>Submit</button>
            </div>

        </div>
    )
};
export default Message;