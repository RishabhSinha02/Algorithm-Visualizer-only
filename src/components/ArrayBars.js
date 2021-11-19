import React, { Component } from "react";
import classes from "./ArrayBars.module.css";

import ArrayBar from "./ArrayBar";

class ArrayBars extends Component {
  render() {
    return (
      <div className={classes.arrayContainer}>
        {this.props.data.map((value, id) => {
          return <ArrayBar key={id} value={value} />;
        })}
      </div>
    );
  }
}

export default ArrayBars;
