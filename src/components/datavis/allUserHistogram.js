import React, { Component } from "react";
// import {curveCatmullRom} from 'd3-shape';
import {
  AreaSeries,
  CustomSVGSeries,
  HorizontalGridLines,
  LineSeries,
  makeWidthFlexible,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";
// import Dimensions from 'react-dimensions';
import { Header, Segment } from "semantic-ui-react";

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

function addvector(a, b) {
  var res = a.map(function (e, i) {
    return e + b[i];
  });
  return res;
}

function abssubtractvector(a, b) {
  var res = a.map(function (e, i) {
    return Math.abs(e - b[i]);
  });
  return res;
}

function add(a, b) {
  return a + b;
}

export default class AllUserHistogram extends Component {
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

    var data = this.props.auhData.map(function (el, idx) {
      return { x: Math.log10(el.x), y: el.y, y0: 0 };
    });

    var counts = this.props.auhData.map(function (el) {
      return el.y;
    });

    var maxCount = Math.max.apply(null, counts);

    var bins = this.props.auhData.map(function (el) {
      return Math.log10(el.x);
    });

    var dists = abssubtractvector(
      bins,
      Array(bins.length).fill(Math.log10(this.props.numTotalSents))
    );
    var minDist = Math.min.apply(null, dists);
    var binThisUser = dists.indexOf(minDist);

    var countsThisUser = this.props.numTotalSents;
    var countsBelow = this.props.auhData
      .map(function (e) {
        if (e.x < countsThisUser) {
          return e.y;
        } else {
          return 0;
        }
      })
      .reduce((a, b) => a + b, 0);
    var countsAbove = this.props.auhData
      .map(function (e) {
        if (e.x > countsThisUser) {
          return e.y;
        } else {
          return 0;
        }
      })
      .reduce((a, b) => a + b, 0);

    var dataVertical = [
      { x: Math.log10(this.props.numTotalSents), y: 0 },
      {
        x: Math.log10(this.props.numTotalSents),
        y: this.props.auhData[binThisUser].y,
      },
    ];

    var percentile = (100 * countsBelow) / (countsBelow + countsAbove);

    var markerYPosition = this.props.auhData[binThisUser].y + 0.15 * maxCount;

    var dataMark = [
      {
        x: Math.log10(this.props.numTotalSents),
        y: markerYPosition,
        size: 10,
        style: { stroke: "#6aaed6", fill: "#6aaed6" },
        customComponent: (row, positionInPixels) => {
          return (
            <g>
              <text x={0} y={10}>
                <tspan x="-10" y="10">
                  {this.props.language === "en" ? "You" : "あなた"}{" "}
                </tspan>
              </text>
            </g>
          );
        },
      },
    ];

    var barChart = (
      <div>
        <FlexibleXYPlot height={150} width={width}>
          <XAxis
            tickLabelAngle={-20}
            tickValues={[0, 1, 2, 3, 4, 5]}
            tickFormat={(v) => [1, 10, 100, 1000, 10000, 100000][v]}
          />
          <YAxis
            title={this.props.language === "en" ? "Users" : "ユーザー"}
            left={-25}
            tickFormat={(v) => ""}
          />
          <HorizontalGridLines />
          <VerticalGridLines />
          <AreaSeries
            animation
            curve={"curveMonotoneX"}
            opacity={1}
            color={"#c6dbef"}
            stroke={"#6aaed6"}
            style={{ strokeWidth: 2 }}
            data={data}
          />
          <LineSeries color={"black"} stroke={"black"} data={dataVertical} />
          <CustomSVGSeries
            color={"#FE6F5E"}
            style={{ strokeWidth: 1 }}
            data={dataMark}
          />
        </FlexibleXYPlot>
      </div>
    );
    return (
      <Segment basic>
        <Header as="h3">
          {this.props.language === "en"
            ? "Compared to other users..."
            : "他のユーザーとの比較..."}
        </Header>

        {this.props.language === "en" ? (
          <div style={{ textAlign: "center" }}>
            You talk've talked more than (example){" "}
            <b>{`${percentile.toFixed(1)}%`}</b> of users.
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            あなたは他の<b>{`${percentile.toFixed(1)}%`}</b>
            のユーザーよりも多くMusioと話します。
          </div>
        )}

        <div style={{ height: "150px" }}>{barChart}</div>
        <div style={{ textAlign: "center" }}>
          <b>{this.props.language === "en" ? "Interactions" : "やりとり"}</b>
        </div>
      </Segment>
    );
  }
}
