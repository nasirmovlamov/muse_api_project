import React, { Component } from "react";
import {
  HorizontalGridLines,
  makeWidthFlexible,
  VerticalBarSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";
// import Dimensions from 'react-dimensions';
import { Header, Segment } from "semantic-ui-react";

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

export default class WeekDayFrequency extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.language === "en") {
      var weekdays = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ];
    } else {
      var weekdays = [
        "月曜日",
        "火曜日",
        "水曜日",
        "木曜日",
        "金曜日",
        "土曜日",
        "日曜日",
      ];
    }
    var width = this.props.width;
    var barChart = (
      <div>
        <FlexibleXYPlot height={150} width={width}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis tickFormat={(v) => weekdays[v]} tickLabelAngle={-20} />
          <YAxis />
          <VerticalBarSeries
            animation
            data={this.props.wfData}
            style={{ stroke: "#fff" }}
          />
        </FlexibleXYPlot>
      </div>
    );
    return (
      <Segment basic>
        <Header as="h3">
          {this.props.language === "en"
            ? "Average Sentences by Weekday"
            : "曜日ごとの話した文章数"}
        </Header>
        <div style={{ height: "150px" }}>{barChart}</div>
        <div style={{ textAlign: "center" }}>
          <b>{this.props.language === "en" ? "Weekday" : "平日"}</b>
        </div>
      </Segment>
    );
  }
}
