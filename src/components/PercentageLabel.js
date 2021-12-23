import React, { Component } from "react";
import { connect } from "react-redux";
import { Label } from "semantic-ui-react";

export default class PercentageLabel extends Component {
  render() {
    let color;
    if (this.props.percentage > 0.8) {
      color = "green";
    } else if (this.props.percentage > 0.6) {
      color = "olive";
    } else if (this.props.percentage > 0.4) {
      color = "yellow";
    } else if (this.props.percentage > 0.2) {
      color = "orange";
    } else {
      color = "red";
    }
    return <Label {...this.props} color={color} />;
  }
}

PercentageLabel = connect((store) => {
  return {
    todos: store.todos,
    data: store.data,
  };
})(PercentageLabel);
