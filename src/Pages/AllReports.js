import React, { useState, useEffect } from 'react';
import './App.css'

const AllReports = () => {
    const [exercises, setExercises] = useState([]);
    const [incident, setIncident] = useState([]);
    
    useEffect(() => {
        try{
            fetch('https://still-brook-60182.herokuapp.com/exercise')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setExercises(data.body)
            })
        }catch(error){
            console.error(error)
        }
    });

    const onSubmitHandler = e => {
        e.preventDefault();
        try{
            fetch('https://still-brook-60182.herokuapp.com/exercise/:id')
            .then(res => res.json())
            .then(data => setIncident(data.body))
        }catch(error){
            console.error(error)
        }
    }

    return(
        <div className='container'>
            <div className='header'>
                <h3 className='ui left floated header'>All incidents reports</h3>
                <div className='ui right floated header'>
                    <form onSubmit={onSubmitHandler} >
                        <select onChange={e => setIncident(e.target.value)} >
                            <option>Incident type</option>
                            <option>Rape</option>
                            <option>Assault</option>
                            <option>Robbery</option>
                            <option>Theft</option>
                            <option>Flood</option>
                            <option>Car Accident</option>
                            <option>Vandalism</option>
                            <option>Homicide</option>
                        </select>
                    </form>
                </div>
            </div>
            <div className='all-reports-table'>
                <table className='ui fixed single line striped table'>
                    <thead>
                        <tr>
                            <th>Complaint By</th>
                            <th>Case ID</th>
                            <th>Incident Type</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Location</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            exercises.map((exercise, i) => {
                                return(
                                    <tr key={i} >
                                        <td>{exercise.name}</td>
                                        <td>{exercise.caseid}</td>
                                        <td>{exercise.incident}</td>
                                        <td>{exercise.date}</td>
                                        <td>{exercise.time}</td>
                                        <td>{exercise.status}</td>
                                        <td>{exercise.location}</td>
                                        <td>{exercise.description}</td>
                                        <td>
                                            <i aria-hidden="true" className="trash icon"></i>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                       
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <i aria-hidden="true" className="trash icon"></i>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <i aria-hidden="true" className="trash icon"></i>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <i aria-hidden="true" className="trash icon"></i>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <i aria-hidden="true" className="trash icon"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};
export default AllReports;