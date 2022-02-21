import React, { Component } from "react";
import "../App.css";
import PostForm from "./post.form";

class PostForms extends Component {
  render() {
    const { tasks, onAdd, onDelete } = this.props;
    return (
      <div className="post-forms-container">
        {tasks.map((task) => (
          <PostForm
            key={tasks.indexOf(task)}
            taskName={task.taskName}
            taskValue={task.taskValue}
            task={task}
            onAdd={onAdd}
            onDelete={onDelete}
          ></PostForm>
        ))}
      </div>
    );
  }
}

export default PostForms;
