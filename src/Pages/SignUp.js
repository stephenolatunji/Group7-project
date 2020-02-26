import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import './App.css';


const SignUp = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    const submitHandler = e => {
        e.preventDefault();
        
        try{
            fetch('https://still-brook-60182.herokuapp.com/users/add', {
                method: 'POST',
                header: { 'content-type': 'application/json'},
                body: JSON.stringify({username: username, email: email, password: password})
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
        <div className='ui container'>
            {/* <Header /> */}
            <div className='row' id='signup'>
                Crest
                <p>Registering to this website, you accept our <a>Terms of Use</a> and <a>Privacy Policy</a></p>
                <div className='ui card' id='signupCard'>
                    <div className='header'>Sign Up</div>
                    <div className='ui three buttons'>
                        <button className='ui button'>Google</button>
                        <button className='ui blue button'>Facebook</button>
                        <button className='ui teal button'>Twitter</button>
                    </div>
                    <div className='ui divider'>or</div>
                    <form className='ui form' onSubmit={submitHandler} >
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
                            <div className="ui checkbox">
                                <input type="checkbox" className="hidden"  tabIndex="0" />
                                <label>I wish to recieve Newsletter, promotions from Crest</label>
                            </div>
                            <div class="field">
                                    <button className='ui green button' type='submit' >Sign Up</button>
                            </div>
                            <p>Already a member? <Link to='/'>Sign In Here!</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default SignUp;