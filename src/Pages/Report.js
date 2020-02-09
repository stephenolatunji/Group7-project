import React from 'react';

const Report = () => {
    return(
        <div className='container'>
            <h3>Incident Report</h3>
            <div className='ui divider' />
            <div className='ui grid'>
                <div className='row'>
                    <div className='three wide column'>
                        Personal Information
                    </div>
                    <div className='nine wide column'>
                        <div className='field'>
                            I am:
                            <input type='radio' />
                            <label>The Victim</label>
                            <div className='ui form'>
                                <div className=' field'>
                                    <label>FirstName</label>
                                    <input placeholder='First name' />
                                </div>
                                <div className='field'>
                                    <label>LastName</label>
                                    <input placeholder='First name' />
                                </div>
                                <div className='field'>
                                    <label>Phone Number</label>
                                    <input placeholder='First name' type='number'/>
                                </div>
                                <div className='field'>
                                    <label>Email Address</label>
                                    <input placeholder='First name' type='email' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='four wide column'>
                        <div className='field'>
                            <input type='radio' />
                            <label>Reporting on behalf of the victim</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ui divider' />
            <h3>Incident Description</h3>
            <div className='ui form'>
                <div className='required field'>
                    <label>What type of incident are you reporting ?</label>
                    <select>
                        <option value="male">Fire Outbreak</option>
                        <option value="female">Rape</option>
                        <option value="female">Assault</option>
                        <option value="female">Robbery</option>
                        <option value="female">Theft</option>
                        <option value="female">Flood</option>
                        <option value="female">Car Accident</option>
                        <option value="female">Vandalism</option>
                        <option value="female">Homicide</option>
                        <option value="female">Others</option>
                    </select>
                </div>
                <div className='required field'>
                    <label>Where did it happen</label>
                    <input type='text'/>
                </div>
                <di>
                    <p>Attach Media</p>
                    <i aria-hidden='true' className='camera icon' />
                    <i aria-hidden='true' className='picture icon' />
                    <i aria-hidden='true' className='video icon' />
                    <i aria-hidden='true' className='microphone icon' />
                </di>
                <div className='required field'>
                    <label>What happened?</label>
                    <textarea placeholder='Tell us something' row='5' />
                </div>
                <div>
                    <button className='ui green inverted button'>Submit</button>
                    <button className='ui orange inverted button'>Reset</button>
                </div>
            </div>
        </div>
    )
};
export default Report;