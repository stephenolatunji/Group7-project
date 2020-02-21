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
                            
                            <div className='ui form' id='form-section'>

                                <form inline>
                                    <input type='radio' />
                                    <label>The Victim</label>
                                    <input type='radio' />
                                    <label>Reporting on behalf of the victim</label>
                                </form>
                                <div className='field'>
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
                            {/* <input type='radio' />
                            <label>Reporting on behalf of the victim</label> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='ui divider' />
            <h3>Incident Description</h3>
            <div className='ui form' id='form-section'>
                <div className='required field'>
                    <label>What type of incident are you reporting ?</label>
                    <select>
                        <option>Fire Outbreak</option>
                        <option>Rape</option>
                        <option>Assault</option>
                        <option>Robbery</option>
                        <option>Theft</option>
                        <option>Flood</option>
                        <option>Car Accident</option>
                        <option>Vandalism</option>
                        <option>Homicide</option>
                        <option>Others</option>
                    </select>
                </div>
                <div className='required field'>
                    <label>Where did it happen</label>
                    <input type='text'/>
                </div>
                <div>
                    <p>Attach Media</p>
                    <i aria-hidden='true' className='camera icon' />
                    <i aria-hidden='true' className='picture icon' />
                    <i aria-hidden='true' className='video icon' />
                    <i aria-hidden='true' className='microphone icon' />
                </div>
                <div className='required field'>
                    <label>What happened?</label>
                    <textarea placeholder='Tell us something' rows='12' />
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