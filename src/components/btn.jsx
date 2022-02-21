import React, { Component } from "react";
import "../App.css";

class Btn extends Component {
  render() {
    return (
      <div className="btn-container" onClick={this.props.onClick}>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Btn;
