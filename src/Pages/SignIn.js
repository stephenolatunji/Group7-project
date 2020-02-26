import React, { useState } from 'react';
import { Link } from 'react-router-dom';


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
        <div className='ui container'>
            <div className='row'>
                Crest
                <p>Registering to this website, you accept our <a>Terms of Use</a> and <a>Privacy Policy</a></p>
                <div className='ui card'>
                    <div className='header'>Sign In</div>
                    <div className='ui three buttons'>
                        <button className='ui button'>Google</button>
                        <button className='ui blue button'>Facebook</button>
                        <button className='ui teal button'>Twitter</button>
                    </div>
                    <div className='ui divider'>or</div>
                    <form className='ui form' onSubmit={submitHandler} >
                        <div className='field'>
                            <label>Username</label>
                            <input placeholder='Username or Email' name='username' onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className='field'>
                            <label>Password</label>
                            <input placeholder='Password' type='password' onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className='field'>
                            <div class="ui checkbox">
                                <input type="checkbox" className="hidden" tabIndex="0" />
                                <label>Keep me signed in</label>
                            </div>
                            <div class="field">
                                <button className='ui green button' type='submit' >Sign Up</button>
                            </div>
                            <p>Not yet registered? <Link to='/'>Sign Up Here!</Link></p>
                            <span><a href='#'>Can't remember Password</a></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default SignIn;