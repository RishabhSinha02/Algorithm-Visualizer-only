import React, { Component } from "react";
import classes from "./SortingVisualizer.module.css";

import { getBubbleSortAnimations } from "../algorithms/sorting/bubbleSort";
import { getMergeSortAnimations } from "../algorithms/sorting/mergeSort";
import * as constants from "../helpers/constants";
import ArrayBars from "./ArrayBars";

class SortingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < constants.ARRAY_MAX_LENGTH; i++) {
      array.push(
        this.getRandomFromRange(
          constants.ARRAY_MIN_VALUE,
          constants.ARRAY_MAX_VALUE
        )
      );
    }

    this.setState({ array });
  }

  getRandomFromRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  bubbleSortWrapper() {
    const { array } = this.state;
    const animations = getBubbleSortAnimations(array);
    const arrayBars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < animations.length; i++) {
      const animation = animations[i];
      const { type } = animation;
      if (type === "comparison") {
        setTimeout(() => {
          const {
            data: [barOneId, barTwoId],
          } = animation;
          const barOneStyle = arrayBars[barOneId].style;
          const barTwoStyle = arrayBars[barTwoId].style;

          barOneStyle.backgroundColor = animation.color;
          barTwoStyle.backgroundColor = animation.color;
        }, i * constants.ANIMATION_SPEED);
      } else if (type === "swap") {
        setTimeout(() => {
          const {
            data: [barOneData, barTwoData],
          } = animation;
          const [barOneId, barOneNewHeight] = barOneData;
          const [barTwoId, barTwoNewHeight] = barTwoData;

          const barOneStyle = arrayBars[barOneId].style;
          const barTwoStyle = arrayBars[barTwoId].style;

          barOneStyle.height = `${barOneNewHeight}px`;
          barTwoStyle.height = `${barTwoNewHeight}px`;
        }, i * constants.ANIMATION_SPEED);
      } else if (type === "done") {
        setTimeout(() => {
          const {
            data: [barId],
          } = animation;
          const barStyle = arrayBars[barId].style;

          barStyle.backgroundColor = animation.color;
        }, i * constants.ANIMATION_SPEED);
      }
    }
  }

  mergeSortWrapper() {
    const { array } = this.state;
    const animations = getMergeSortAnimations(array);
    const arrayBars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < animations.length; i++) {
      const animation = animations[i];
      const { type } = animation;
      if (type === "comparison") {
        setTimeout(() => {
          const {
            data: [barOneId, barTwoId],
          } = animation;

          const barOneStyle = arrayBars[barOneId].style;
          const barTwoStyle = arrayBars[barTwoId].style;

          barOneStyle.backgroundColor = animation.color;
          barTwoStyle.backgroundColor = animation.color;
        }, i * constants.ANIMATION_SPEED);
      } else if (type === "sort") {
        setTimeout(() => {
          const {
            data: [barId, barNewHeight],
          } = animation;

          const barStyle = arrayBars[barId].style;
          barStyle.height = `${barNewHeight}px`;
        }, i * constants.ANIMATION_SPEED);
      } else if (type === "done") {
        setTimeout(() => {
          const {
            data: [barId],
          } = animation;

          const barStyle = arrayBars[barId].style;
          barStyle.backgroundColor = animation.color;
        }, i * constants.ANIMATION_SPEED);
      }
    }
  }

  render() {
    const { array } = this.state;
    return (
      <div className={classes.sortingVisualizer}>
        <ArrayBars data={array} />
        <div className={classes.buttons}>
          <button
            className={classes.button}
            onClick={this.resetArray.bind(this)}
          >
            Generate New Array
          </button>

          <button
            className={classes.button}
            onClick={this.bubbleSortWrapper.bind(this)}
          >
            Bubble Sort
          </button>

          <button
            className={classes.button}
            onClick={this.mergeSortWrapper.bind(this)}
          >
            Merge Sort
          </button>
        </div>
      </div>
    );
  }
}

export default SortingVisualizer;
