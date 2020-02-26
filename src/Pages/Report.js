import React, { useState } from 'react';

const Report = () => {

    const [accidentType, setAccidentType] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');


    const submitHandler = e => {
        e.preventDefault();

        const report = {
            accidentType: accidentType,
            location: location,
            description: description
        };

        console.log(report)

        try{
            fetch('https://still-brook-60182.herokuapp.com/exercise/add', {
                method: 'POST',
                header: {'content-type': 'application/json'},
                body: JSON.stringify(
                    {
                    accidentType: accidentType,
                    location: location,
                    description: description })
            })
        }catch(error){
            console.error(error)
        };
    };

    return(
        <div className='container'>
            <h3>Incident Report</h3>
            <div className='ui divider' />
            <p>Incident Description</p>
            <form onSubmit={submitHandler} >
                <div className='ui form' id='form-section'>
                    <div className='required field'>
                        <label>What type of incident are you reporting ?</label>
                        <select onChange={e => setAccidentType(e.target.value)}>
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
                        <input type='text' onChange={e => setLocation(e.target.value)} />
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
                        <textarea placeholder='Tell us something' rows='12' onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div>
                        <button className='ui green inverted button' type='submit'>Submit</button>
                        <button className='ui orange inverted button' type='reset'>Reset</button>
                    </div>
                </div>
            </form>
            
        </div>
    )
};
export default Report;