import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header'


const SignIn = ()=> {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
 

    const submitHandler = e => {
        e.preventDefault();

        try {
            fetch('https://still-brook-60182.herokuapp.com/users/')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })

        } catch (error) {
            console.error(error);
        }

    }

    
    return(
        <>
            <Header />
            <div className='ui container' id='signup-section'>
                <div className='row'>
                <h1>Crest</h1>
                <p>Registering to this website, you accept our <a>Terms of Use</a> and <a>Privacy Policy</a></p>
                    <div className='ui card' id='signup-card'>
                        <div className='header'><h3>Sign In</h3></div>
                        <div className=''>
                            <a href='#' className='signup-icon'><i aria-hidden='true' className='google icon'>Google</i></a>
                            <a href='#' className='signup-icon'><i aria-hidden='true' className='facebook icon'>Facebook</i></a>
                            <a href='#' className='signup-icon'><i aria-hidden='true' className='twitter icon'>Twitter</i></a>
                        </div>
                        <div className='ui horizontal divider'>or</div>
                        <form className='ui form' onSubmit={submitHandler} id='signup-form'>
                            <div className='field'>
                                <label>Username</label>
                                <input placeholder='Username or Email' name='username' onChange={e => setUsername(e.target.value)} />
                            </div>
                            <div className='field'>
                                <label>Password</label>
                                <input placeholder='Password' type='password' onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className='field'>
                                <div className='ui checkbox'>
                                    <input type='checkbox' className='hidden' />
                                    <label>Keep me signed in</label>
                                </div>
                            </div>
                            <button className='ui orange button' type='submit'>Sign In</button>
                            <p>Not yet registered? <Link to='/signup'>Sign Up</Link></p>
                            <span><a href='#'>Can't remember Password</a></span>
                        </form>
                    </div>
                </div>
            </div>
        </>
        
    )
};
export default SignIn;