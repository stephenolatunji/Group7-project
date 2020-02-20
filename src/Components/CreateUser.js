import React, { Component } from "react";
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));

    // setting the broswer to blink after a submit
    this.setState({
      username: "",
      email:"",
      password:""
    });
  }
  render() {
    return (
      <div className="ui container">
      
        <h1>CREST</h1>
      <p>
        Registaring to this website, you accept our <span>Terms of Use</span>{" "}
        and our <span>Privacy policy</span>
      </p>
      <div>
        <p>Sign Up</p>
        <button class="ui primary button">GOOGLE</button>
        <button class="ui primary button">FACEBOOK</button>
        <button class="ui primary button">TWITTER</button>
        </div>

        <div class="ui horizontal divider">or</div>
        
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            {/* <label>Username: </label> */}
            <input className="form-control"
              type="text"
              required
              className="form-control"
              placeholder="Username"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>

          <div className="field">
            {/* <label>Email: </label> */}
            <input
              type="email"
              required
              className="form-control"
              placeholder="email"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>

          <div className="field">
            {/* <label>Password: </label> */}
            <input
              type="password"
              required
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          {/* <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div> */}

<button type="submit" class="ui primary button">
            Sign Up
          </button>

        </form>
      </div>
    );
  }
}
