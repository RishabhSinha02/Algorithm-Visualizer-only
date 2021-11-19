import React, { Component } from "react";
import classes from "./ArrayBar.module.css";

class ArrayBar extends Component {
  render() {
    return (
      <div
        className={`${classes.arrayBar} ${"array-bar"}`}
        key={this.props.id}
        style={{
          height: `${this.props.value}px`,
        }}
      />
    );
  }
}

export default ArrayBar;
