import React, { Component } from "react";
import "../App.css";
import Btn from "./btn.jsx";

class Form extends Component {
  render() {
    let tName = "";
    let tValue = "";
    const { onAdd } = this.props;
    return (
      <div className="form-container">
        <h1>ToDoList</h1>
        <div className="form-line-container">
          <p>task name:</p>
          <input onChange={(event) => (tName = event.target.value)}></input>
        </div>
        <div className="form-line-container">
          <p>task decription:</p>
          <input onChange={(event) => (tValue = event.target.value)}></input>
        </div>
        <div className="btn-form">
          <Btn onClick={() => onAdd({ taskName: tName, taskValue: tValue })}>
            add task
          </Btn>
        </div>
      </div>
    );
  }
}

export default Form;
