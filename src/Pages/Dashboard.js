import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


const Dashboard = () => {
    return(
        <div className='container'>
            
            <div className='ui segment' id='dashboard-segment'>
                Welcome back Tolu you have a <a href='#'>New message</a>
            </div>
            <div className='ui grid'>
                <div className='row'>
                    <div className='ten wide column' id='board'>
                        <Link to={`/userdashboard/report`}>
                            <button className='ui orange button'>Create Accident Report</button>
                        </Link>
                        <table className='ui striped table'>
                            <thead class="">
                                <tr class=""><th colspan="7" class="">Recent Reports</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#</td>
                                    <td>Case ID</td>
                                    <td>Incident Type</td>
                                    <td>Date</td>
                                    <td>Time</td>
                                    <td>Status</td>
                                    <td>Description</td>
                                </tr>
                                <tr>
                                    <td>1</td>
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
                                    <td>2</td>
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
                                    <td>3</td>
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
                                    <td>4</td>
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
                    <div className='six wide column'>
                        <p><strong>Upcoming Events</strong></p>
                        <div>
                            <div className='ui card' id='events-card'>
                                <div className='content'>
                                    <h4>First Aid & CPR</h4>
                                    lorem ipsum dolor
                                </div>
                                <div className='content'>
                                    <h4>Fire Safety Tips</h4>
                                    lorem ipsum dolor
                                </div>
                                <div className='content'>
                                    <button className="ui orange basic button">View More</button>
                                </div>
                            </div>
                            <strong>Ongoing Campaign</strong>
                            <div className='ui card' id='events-card'>
                                <div className='content'>
                                    <h4>Support an Accident</h4>
                                    lorem ipsum dolor
                                </div>
                                <div className='content'>
                                    <h4>Blood donation</h4>
                                    lorem ipsum dolor
                                </div>
                                <div className='content'>
                                    <button className="ui orange basic button" >View More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Dashboard;