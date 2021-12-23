import React, { Component } from "react";
import {
  HorizontalGridLines,
  makeWidthFlexible,
  VerticalGridLines,
  VerticalRectSeries,
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

export default class SentenceLengthHistogram extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var width = this.props.width;

    var data = this.props.slData.map(function (el, idx) {
      return { x0: Math.log10(el.x0), x: Math.log10(el.x), y: el.y, y0: 0 };
    });

    var barChart = (
      <div>
        <FlexibleXYPlot height={150} width={width}>
          <XAxis
            tickLabelAngle={-20}
            tickValues={[0, 1, 2]}
            tickFormat={(v) => [1, 10, 100][v]}
          />
          <YAxis
            title={this.props.language === "en" ? "Sentences" : "文章"}
            left={-25}
            tickFormat={(v) => ""}
          />
          <HorizontalGridLines />
          <VerticalGridLines />
          <VerticalRectSeries
            animation
            curve={"curveMonotoneX"}
            opacity={1}
            color={"#c6dbef"}
            stroke={"#6aaed6"}
            style={{ strokeWidth: 2 }}
            data={data}
          />
        </FlexibleXYPlot>
      </div>
    );
    return (
      <Segment basic>
        <Header as="h3">
          {this.props.language === "en"
            ? "Length of your Sentences"
            : "文章の長さ"}
        </Header>
        {this.props.language === "en" ? (
          <div style={{ textAlign: "center" }}>
            There are on average{" "}
            <b>{`${this.props.average_word_count.toFixed(0)}`}</b> words in your
            sentences.
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            あなたの文章には平均
            <b>{`${this.props.average_word_count.toFixed(0)}`}</b>
            単語が含まれています。
          </div>
        )}

        <div style={{ height: "150px" }}>{barChart}</div>
        <div style={{ textAlign: "center" }}>
          <b>{this.props.language === "en" ? "Number of Words" : "単語数"}</b>
        </div>
      </Segment>
    );
  }
}
