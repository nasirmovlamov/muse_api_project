import React, { Component } from "react";
import { Chart, Cloud, Transform } from "rumble-charts";
import { Header, Segment } from "semantic-ui-react";
// import Dimensions from 'react-dimensions'

export default class WordCloud extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var series = [{ data: this.props.wcData }];
    var wc = (
      <Segment basic>
        <Header as="h4">{this.props.title}</Header>
        <Chart width={this.props.width} height={250} series={series}>
          <Transform method={["transpose"]}>
            <Cloud font="sans-serif" minFontSize={10} maxFontSize={50} />
          </Transform>
        </Chart>
      </Segment>
    );
    return <div>{wc}</div>;
  }
}
