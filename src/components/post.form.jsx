import React, { Component } from "react";
import "../App.css";
import Btn from "./btn";

class PostForm extends Component {
  render() {
    const { taskName, taskValue, onDelete, task } = this.props;
    return (
      <div className="post-form-container">
        <h1>{taskName}</h1>
        <div className="line-container">
          <p>{taskValue}</p>
          <Btn onClick={() => onDelete(task)}>x</Btn>
        </div>
      </div>
    );
  }
}

export default PostForm;
