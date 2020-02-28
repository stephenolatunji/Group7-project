import React, { useState } from 'react';


const UserProfile = () => {
    const [userName, setUserName] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');


    const submitHandler = e => {
        e.preventDefault();

        const profile = {
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email
        };
        console.log(profile);
        

        try {
            fetch('https://still-brook-60182.herokuapp.com/profile/add', {
                method: 'POST',
                header: { 'content-type': 'application/json' },
                body: JSON.stringify(
                    {
                        firstName: firstName,
                        lastName: lastName,
                        phoneNumber: phoneNumber,
                        email: email
                    })
            })
                .then(res => res.json())
                .then(data => {
                
                    console.log('profile added')
                })
        } catch (error) {
            console.error(error)
        };
    };


    return(
        <div className='ui container'>
            <div className='row'>
                <div className='three wide column'>
                    Personal Information
                </div>
                <div className='ui divider'></div>
                <div className='nine wide column'>
                    <form onSubmit={submitHandler}>
                        <div className='ui form' id='form-section'>
                            <div className='field'>
                                <label>UserName</label>
                                <input placeholder='UserName name' name='firstName' type='text' onChange={e => setUserName(e.target.value)} />
                            </div>
                            <div className='field'>
                                <label>FirstName</label>
                                <input placeholder='First name' name='firstName' type='text' onChange={e => setFirstName(e.target.value)} />
                            </div>
                            <div className='field'>
                                <label>LastName</label>
                                <input placeholder='Last name' name='lastName' onChange={e => setLastName(e.target.value)} />
                            </div>
                            <div className='field'>
                                <label>Phone Number</label>
                                <input placeholder='Phone Number' name='phoneNumber' type='number' onChange={e => setPhoneNumber(e.target.value)} />
                            </div>
                            <div className='field'>
                                <label>Email Address</label>
                                <input placeholder='Email Address' name='email' type='email' onChange={e => setEmail(e.target.value)} />
                            </div>
                            <button type='submit' className='ui orange button'>Submit</button>
                        </div>
                    </form>      
                </div>
                <div className='four wide column'>
                    <div className='field'>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default UserProfile;