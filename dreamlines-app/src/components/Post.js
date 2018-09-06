import React, { Component } from 'react';
import axios from 'axios';
import Comment from './Comment';

class Post extends Component {
 
 	constructor(props) {
	    super(props); 
	    this.state = {
	      comments: [],
	      showComments: false
	    };
  	}

  	getPostComments(postId) {
	  	var url = 'http://jsonplaceholder.typicode.com/comments/?postId=' + postId;
	    axios.get(url)
	      .then(res => {
	        const comments = res.data;
	        console.log(comments);
	        this.setState({
	          showComments: true,
	          comments: comments
	        });
      	})
  	}

 render() {
 	let commentsNumber;
 	let comments;
 	let showCommentsButton = <button onClick={()=>this.getPostComments(this.props.post.id)} 
          		type="button" className="btn btn-success">Show comments</button>;
 	if(this.state.showComments) {
 		commentsNumber =  <p className="comments-number">{this.state.comments.length} comments available</p>
    	comments = Object.keys(this.state.comments).map(key => <Comment key={key} comment={this.state.comments[key]} />)
    	showCommentsButton = '';
 	}
    return (
      <div className="row">
        <div className="col-md-1"/>
        <div className="post col-md-10">
          	<p><b>{this.props.post.title}</b></p>
          	<p>{this.props.post.body}</p>
          	{showCommentsButton}
          	<hr/>
          	<div>
          		{commentsNumber}
          		{comments}
      		</div>
        </div>
      </div>
    );
  }
}
 
export default Post;