import React from 'react';
import './App.css'

const AllReports = () => {
    return(
        <div className='container'>
            <div className='header'>
                <h3 className='ui left floated header'>All incidents reports</h3>
                <div className='ui right floated header'>
                    <select>
                        <option value=''>Incident type</option>
                        <option>Rape</option>
                        <option>Assault</option>
                        <option>Robbery</option>
                        <option>Theft</option>
                        <option>Flood</option>
                        <option>Car Accident</option>
                        <option>Vandalism</option>
                        <option>Homicide</option>
                    </select>
                </div>
            </div>
            <div className='all-reports-table'>
                <table className='ui fixed single line striped table'>
                    <thead class="">
                        <tr class="">
                            <th>Complaint By</th>
                            <th>Incident Type</th>
                            <th>Case ID</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
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