import React, { Component } from "react";
import axios from 'axios';
// import uuid from "uuid";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    // this.onChangeUsername = this.onChangeHashtag.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeClientid = this.onChangeClientid.bind(this);
    this.onChangeIncident = this.onChangeIncident.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      
      username: "",
      // clientid: uuid,
      incident: "",
      date: new Date(),
      time: "",
      Status: "",
      description: "",
      duration: "",
      users: []
    };
  }
  //Call from database
  componentDidMount() {
    axios.get('http://localhost:5000/users/')
    .then(response => {
      if (response.data.length > 0 ){
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data[0].username
        })
      }

    })
    
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeClientid(e) {
    this.setState({
      clientid: e.target.value
    });
  }

 onChangeIncident(e) {
    this.setState({
      incident: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: Date
    });
  }

  onChangeTime(e) {
    this.setState({
      time: e.target.value
    });
  }



  onChangeStatus(e) {
    this.setState({
      Status: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      clientid: this.state.clientid,
      incident: this.state.incident,
      date: this.state.date,
      time: this.state.time,
      status: this.state.status,
      description: this.state.description,
      duration: this.state.duration,
    };
    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res => console.log(res.data));


    window.location = "/";
  }
  render() {
    return (
      <div className="ui container">
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <label>Username: </label>

            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >

            {this.state.users.map(function(user) {
              return <option key={user} value={user}>
                  {user}
                </option>
              ;
            })
            }
          </select>
          </div>

          {/* <div className="form-group">
            <label>clientid:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.clientid}
              onChange={this.onChangeClientid}
            />{uuid.v4()}
          </div> */}

          <div className="field">
            <label>Incident Type:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.incident}
              onChange={this.onChangeIncident}
            />
          </div>

          <div className="field">
            <label>Date:</label>
            <input
              /* <DatePicker */
              type="text"
              required
              className="form-control"
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            
          </div>

          <div className="field">
            <label>Time:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.time}
              onChange={this.onChangeTime}
            />
          </div>


          <div className="field">
            <label>Status:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.status}
              onChange={this.onChangeStatus}
            />
          </div>

          <div className="field">
            <label>Description:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="field">
            <label>Duration:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>


          <div className="field">
            {/* <input
              type="submit"
              value="Create Exercise log"
              className="btn btn-primary"
            /> */}
             <button type="submit" class="ui primary button">
            Send Report
          </button>
          </div>
        </form>
      </div>
    );
  }
}
