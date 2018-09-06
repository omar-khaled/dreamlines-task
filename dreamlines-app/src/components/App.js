import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Header from './Header';
import Post from './Post';
import Login from './Login';
import User from '../models/User';
import '../App.css';

const cookies = new Cookies();
class App extends Component {
  
  constructor() {
    super(); 
    this.state = {
      posts: [],
      username: cookies.get('username')
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  getUserPosts(username) {
    var userId = User.getUserIdFromUsername(username);
    console.log(userId);
    var url = 'http://jsonplaceholder.typicode.com/posts?userId=' + userId;
    axios.get(url)
      .then(res => {
        const posts = res.data;
        this.setState({
          posts: posts
        });
      })
  }

  componentDidMount() {
    if(this.state.username) {
      this.getUserPosts(this.state.username);
    }
  }

  logIn(username) {
    this.setState({
      username: username
    });
    cookies.set('username', username, { path: '/' });
    this.getUserPosts(username);
  }

  logOut(username) {
    this.setState({
      username: undefined,
      posts: []
    });
    cookies.remove('username');
  }

  render() {
    let body;
    let postCreated;
    if(this.state.username) {
      body = Object.keys(this.state.posts).map(key => <Post key={key} post={this.state.posts[key]} />);
      postCreated = <p>{this.state.posts.length} Posts created!</p>;
    } else {
      body = <Login login={this.logIn} />
    }
    return (
      <div className="App">
        <Header username={this.state.username} logOut={this.logOut}/>
        {postCreated}
        {body}
      </div>
    );
  }
}

export default App;
