import React, { Component } from "react";
// import Dimensions from 'react-dimensions'
import { Graph } from "react-d3-graph";
import { Header } from "semantic-ui-react";

export default class NounChunkGraph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var width = this.props.width;
    var myConfig = {
      automaticRearrangeAfterDropNode: false,
      staticGraph: false,
      highlightBehavior: true,
      maxZoom: 4,
      minZoom: 0.1,
      node: {
        fontSize: 10,
        size: 200,
        color: "lightblue",
        highlightFontSize: 10,
        highlightStrokeColor: "orange",
      },
      link: {
        highlightColor: "orange",
        color: "#12939A",
      },
      height: 248,
      width: 500,
    };
    console.log(this.props.ncData);

    // var links = this.props.ncData.links.map((el)=>{
    //   return (
    //     {source: this.props.ncData.nodes[el.source].id, target:this.props.ncData.nodes[el.target].id}
    //   )
    // })

    // console.log(this.props.links)

    var data = {
      links: this.props.ncData.links,
      nodes: this.props.ncData.nodes,
    };

    if (this.props.ncData.nodes.length > 0) {
      var graph = <Graph id="noun-chunk-graph" config={myConfig} data={data} />;
    } else {
      var graph = <div>Not enough data! Talk to Musio some more :</div>;
    }

    return (
      <div style={{ width: this.props.width, textAlign: "center" }}>
        <Header as="h3">
          {this.props.language === "en"
            ? "Recent Memories about You"
            : "あなたとの最近の思い出"}
        </Header>
        <div>{graph}</div>
      </div>
    );
  }
}
