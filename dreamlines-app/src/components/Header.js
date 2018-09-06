import React, { Component } from 'react';

class Header extends Component {
 
	constructor(props) {
	    super(props);
	    this.state = {
	    	username: props.username
	    };
	    this.logOut = this.logOut.bind(this);
	}

	logOut() {
		this.props.logOut(this.state.username);
	}

	render() {
	return (
	  <div className="row">
	    <div className="user-name" align="right">
	      <p>Welcome {this.props.username}, <a href="#" onClick={this.logOut}>Logout</a></p>
	    </div>
	  </div>
	);
	}
}
 
export default Header;