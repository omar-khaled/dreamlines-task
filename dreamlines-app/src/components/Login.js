import React, { Component } from 'react';
import User from '../models/User';
import '../App.css';

class Login extends Component {
  
  constructor(props) {
    super(props); 
    this.state = {
      value: '',
      showEndUserMessage: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.authenticateUser(this.state.value);
  }

  authenticateUser(username) { 
    var user = User.AuthenticateUser(username);
    if(user) {
      this.props.login(username);
      this.setState({
        showEndUserMessage: false
      });
    }
    else { 
      this.setState({
        showEndUserMessage: true
      });
    }
  }

  render() {
    let endUserMessage;
    if(this.state.showEndUserMessage) {
      endUserMessage = 'Username does not exist, please enter a valid username';
    }
    return (
      <div>
        <p class="not-found-message">{endUserMessage}</p>
        <form onSubmit={this.handleSubmit} align="center">
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control username-input" id="username" placeholder="Enter username" 
              value={this.state.value} onChange={this.handleChange} />
            <input type="submit" className="btn btn-primary submit-btn" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default Login;
