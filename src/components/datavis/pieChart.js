import React, { Component } from "react";
// import {curveCatmullRom} from 'd3-shape';
import { ArcSeries, makeWidthFlexible, XYPlot } from "react-vis";
// import Dimensions from 'react-dimensions';
import { Grid, Header, Segment, Table } from "semantic-ui-react";

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

const PI = Math.PI;

export default class PieChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var width = this.props.width;

    var legend = this.props.arc_series_legend_items.map(function (el, idx) {
      return (
        <Table.Row key={"pichart_legend_key_" + el.title}>
          <Table.Cell>
            <div
              style={{
                borderRadius: "8px",
                height: "16px",
                width: "16px",
                backgroundColor: el.color,
                float: "left",
                textAlign: "center",
              }}
            ></div>
            <div
              style={{
                paddingLeft: "5px",
                float: "left",
                textAlign: "center",
              }}
            >
              {el.title === "?" ? "unknown" : el.title + "(CEFR)"}
            </div>
          </Table.Cell>
        </Table.Row>
      );
    }, this);

    var pieChart = (
      <div style={{ boarder: "2px", marginLeft: "-50px" }}>
        <FlexibleXYPlot
          xDomain={[-0.1, 0.1]}
          yDomain={[-0.1, 0.1]}
          height={200}
          width={500}
        >
          <ArcSeries
            animation
            radiusType={"literal"}
            colorType={"literal"}
            center={{ x: 0, y: 0 }}
            data={this.props.arcData}
          />
        </FlexibleXYPlot>
      </div>
    );
    return (
      <Segment basic>
        <Header as="h3">{this.props.title}</Header>
        <div style={{ height: "200px" }}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Table
                  basic="very"
                  collapsing
                  compact="very"
                  size="small"
                  columns={1}
                >
                  <Table.Body>{legend}</Table.Body>
                </Table>
              </Grid.Column>

              <Grid.Column width={8}>{pieChart}</Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Segment>
    );
  }
}
