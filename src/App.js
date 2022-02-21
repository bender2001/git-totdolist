import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Form from "./components/form.jsx";
import PostForms from "./components/post-forms.jsx";

class App extends Component {
  state = {
    tasks: [
      { taskName: "first", taskValue: "do homework" },
      { taskName: "second", taskValue: "cook meal" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Form onAdd={this.onAdd}></Form>
          <PostForms
            tasks={this.state.tasks}
            onDelete={this.onDelete}
          ></PostForms>
        </div>
      </React.Fragment>
    );
  }

  onAdd = (task) => {
    const tasks = [...this.state.tasks];
    tasks.push(task);
    this.setState({ tasks });
  };

  onDelete = (task) => {
    const tasks = this.state.tasks;
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    this.setState({ tasks });
  };
}

export default App;
