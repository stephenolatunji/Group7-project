import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import './App.css';
import axios from "axios"


const SignUp = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    const submitHandler = e => {
        e.preventDefault();

        const user = {
            username: username,
            email: email,
            password: password
        };
        console.log(user);

        
        try{
            fetch(
                // 'http://localhost:5000/users/add'
                 'https://still-brook-60182.herokuapp.com/users/add'
                , {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'},
                body: JSON.stringify({username:username, 
                email: email, 
                password: password})
            })
                .then(res => res.json())
                .then(data => {
                    alert('added')
                    console.log(data);
                })

    }catch(error){
            console.error(error);
        }
    }

    

    return (
        <>
            <Header />
                <div className='ui container'id='signup-section'>
                    <div className='row'>
                    <h1>Crest</h1>
                    <p>Registering to this website, you accept our <a>Terms of Use</a> and <a>Privacy Policy</a></p>
                        <div className='ui card' id='signup-card'>
                            <div className='header'><h3>Sign Up</h3></div>
                            <div className=''>
                                <a href='http://www.googlemail.com/signin' className='signup-icon'><i aria-hidden='true' className='google icon'>Google</i></a>
                                <a href='#' className='signup-icon'><i aria-hidden='true' className='facebook icon'>Facebook</i></a>
                                <a href='#' className='signup-icon'><i aria-hidden='true' className='twitter icon'>Twitter</i></a>
                            </div>
                            <div className='ui horizontal divider'>or</div>
                            <form className='ui form' onSubmit={submitHandler} id='signup-form'>
                                <div className='field'>
                                    <label>Username</label>
                                    <input placeholder='Username' name='username' onChange={e => setUsername(e.target.value)} />
                                </div>
                                <div className='field'>
                                    <label>Email</label>
                                    <input placeholder='Email' type='email' name='email' onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className='field'>
                                    <label>Password</label>
                                    <input placeholder='Password' type='password' name='password' onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className='field'>
                                    <div className='ui checkbox'>
                                        <input type='checkbox' className='hidden' />
                                        <label>I wish to recieve Newsletter, promotions from Crest</label>
                                    </div>
                                </div>
                                <button className='ui orange button' type='submit' >Sign Up</button>
                                <p>Already a member? <Link to='/signin'>Sign In Here!</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
        </>
        
    )
};
export default SignUp;