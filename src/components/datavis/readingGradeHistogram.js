import React, { Component } from "react";
// import {curveCatmullRom} from 'd3-shape';
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
import { Divider, Header, List, Segment } from "semantic-ui-react";

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

export default class ReadinGradeHistogram extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var width = this.props.width;
    var data = this.props.rgData.map(function (el, idx) {
      return { x: idx, y: el.y, y0: 0 };
    });
    var barChart = (
      <div>
        <FlexibleXYPlot height={150} width={width}>
          <XAxis tickLabelAngle={-20} />
          <YAxis
            title={this.props.language === "en" ? "Sentences" : "文章"}
            left={-25}
            tickFormat={(v) => ""}
          />
          <HorizontalGridLines />
          <VerticalGridLines />
          <VerticalRectSeries
            animation
            opacity={1}
            color={"#c6dbef"}
            stroke={"#6aaed6"}
            style={{ strokeWidth: 2 }}
            curve={"curveMonotoneX"}
            data={this.props.rgData}
          />
        </FlexibleXYPlot>
      </div>
    );
    return (
      <Segment basic>
        <Header as="h3">
          {this.props.language === "en"
            ? "Reading Grade"
            : "読みやすさのスコア"}
        </Header>
        <div style={{ textAlign: "center" }}>
          {this.props.language === "en"
            ? "The average *FKGL of your sentences is " +
              this.props.averageReadingGrade.toFixed(1)
            : "あなたの文章の平均FKGL*(読みやすさのスコア)は" +
              this.props.averageReadingGrade.toFixed(1) +
              "です。"}
        </div>
        <div style={{ height: "150px" }}>{barChart}</div>
        <div style={{ textAlign: "center" }}>
          <b>
            {this.props.language === "en"
              ? "Grade Level"
              : "読みやすさのスコア"}
          </b>
        </div>
        <div>
          <Divider hidden />

          {this.props.language === "en" ? (
            <List as="ul">
              <List.Item as="li">
                This means an average grade{" "}
                <b>{`${this.props.averageReadingGrade.toFixed(0)}`}</b> student
                can read and understand your sentences.
              </List.Item>
              <List.Item as="li">
                *<b>Flesch-Kincaid Grade Level</b>: The Flesch–Kincaid
                readability tests are readability tests designed to indicate how
                difficult a passage in English is to understand.
              </List.Item>
              <List.Item as="li">
                <a href="https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests">
                  Read more about Flesch-Kincaid Grade Level
                </a>
              </List.Item>
            </List>
          ) : (
            <List as="ul">
              <List.Item as="li">
                米国の平均的な小学
                <b>{`${this.props.averageReadingGrade.toFixed(0)}`}</b>
                年生があなたの文章を読み理解できます。
              </List.Item>
              <List.Item as="li">
                *<b>Flesch-Kincaid Readability Test</b>
                とは、英文の読みやすさを測るために設計されたテストです。
              </List.Item>
              <List.Item as="li">
                <a href="http://someya-net.com/wlc/readability.html">
                  Flesch-Kincaid Grade Levelの詳細について
                </a>
              </List.Item>
            </List>
          )}
        </div>
      </Segment>
    );
  }
}
