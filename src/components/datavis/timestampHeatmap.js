import React, { Component } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
// import Dimensions from 'react-dimensions';
import { Header, Segment } from "semantic-ui-react";

export default class TimestampHeatmap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var width = this.props.width;

    var counts = this.props.dcData.map(function (el) {
      return el.count;
    });

    var max_count = Math.max.apply(null, counts);

    if (this.props.language === "en") {
      var monthLabels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    } else {
      var monthLabels = [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ];
    }

    var heatMap = (
      <div>
        <CalendarHeatmap
          monthLabels={monthLabels}
          values={this.props.dcData}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            } else if (value.count <= max_count / 10.0) {
              return "color-scale-1";
            } else if (
              value.count > max_count / 10.0 &&
              value.count <= (2 * max_count) / 10.0
            ) {
              return "color-scale-2";
            } else if (
              value.count > (2 * max_count) / 10.0 &&
              value.count <= (3 * max_count) / 10.0
            ) {
              return "color-scale-3";
            } else if (
              value.count > (3 * max_count) / 10.0 &&
              value.count <= (4 * max_count) / 10.0
            ) {
              return "color-scale-4";
            } else if (
              value.count > (4 * max_count) / 10.0 &&
              value.count <= (5 * max_count) / 10.0
            ) {
              return "color-scale-5";
            } else if (
              value.count > (5 * max_count) / 10.0 &&
              value.count <= (6 * max_count) / 10.0
            ) {
              return "color-scale-6";
            } else if (
              value.count > (6 * max_count) / 10.0 &&
              value.count <= (7 * max_count) / 10.0
            ) {
              return "color-scale-7";
            } else if (
              value.count > (7 * max_count) / 10.0 &&
              value.count <= (8 * max_count) / 10.0
            ) {
              return "color-scale-8";
            } else if (
              value.count > (8 * max_count) / 10.0 &&
              value.count <= (9 * max_count) / 10.0
            ) {
              return "color-scale-9";
            } else {
              return "color-scale-10";
            }
            return "color-empty";
          }}
        />
      </div>
    );
    return (
      <Segment basic>
        <Header as="h3">
          {this.props.language === "en"
            ? "Interaction Heatmap"
            : "活動記録のヒートマップ"}
        </Header>
        <div>{heatMap}</div>
      </Segment>
    );
  }
}
