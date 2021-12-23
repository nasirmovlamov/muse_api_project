// import {curveCatmullRom} from 'd3-shape';
import moment from "moment";
import React, { Component } from "react";
import {
  AreaSeries,
  HorizontalGridLines,
  makeWidthFlexible,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";
// import Dimensions from 'react-dimensions';
import { Header, Segment } from "semantic-ui-react";

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

export default class TimestampHistogram extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var weekdays = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];
    var width = this.props.width;
    var data = this.props.thData.map(function (el, idx) {
      return { x: idx, y: el.y, y0: 0, timestamp: el.x };
    });
    console.log(data);
    console.log(this.props.thData);
    var barChart = (
      <div>
        <FlexibleXYPlot height={150} width={width}>
          <XAxis
            tickLabelAngle={-20}
            tickValues={[
              Math.floor(data.length / 5.0),
              2 * Math.floor(data.length / 5.0),
              3 * Math.floor(data.length / 5.0),
              4 * Math.floor(data.length / 5.0),
              data.length - 1,
            ]}
            tickFormat={(v) =>
              moment(data[v].timestamp * 1000).format("YYYY-M-DD")
            }
          />
          <YAxis />
          <HorizontalGridLines />
          <VerticalGridLines />
          <AreaSeries
            animation
            color={"#c6dbef"}
            stroke={"#6aaed6"}
            style={{ strokeWidth: 2 }}
            curve={"curveMonotoneX"}
            data={data}
          />
        </FlexibleXYPlot>
      </div>
    );
    return (
      <Segment basic>
        <Header as="h3">
          {this.props.language === "en"
            ? "Sentences per Day"
            : "1日あたりの話した文章数"}
        </Header>
        <div style={{ height: "150px" }}>{barChart}</div>
        <div style={{ textAlign: "center" }}>
          <b>{this.props.language === "en" ? "Day" : "日"}</b>
        </div>
      </Segment>
    );
  }
}
