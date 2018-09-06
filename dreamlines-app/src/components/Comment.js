import React, { Component } from 'react';
import UserIcon from '../images/usericon.png';

class Comment extends Component {
 
 render() {
    return (
      <div className="row comment">
        <img src={UserIcon} height="50" />
        <span>{this.props.comment.name} (<a href={"mailto:" + this.props.comment.email}>{this.props.comment.email})</a>:</span>
        <p>{this.props.comment.body}</p>
      </div>
    );
  }
}
 
export default Comment;