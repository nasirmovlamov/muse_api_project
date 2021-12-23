import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import { connect } from "react-redux";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Tab,
} from "semantic-ui-react";
import Visualization from "../components/AIAnalysisVisualization";
import NextLevel from "../components/NextLevel";
import { fetchAnalysis } from "../redux/actions/actions";
import "../assets/global/components/aiAnalaysis.css"

const panes = [
  {
    menuItem: "Examples",
    render: () => (
      <Tab.Pane style={{ padding: 40 }}>
        <Header as="h1" style={{ fontSize: "2em" }}>
          Examples from other Apps using Muse API
        </Header>
        <Container>
          <Header as="h1" style={{ fontSize: "1.5em" }} textAlign="center">
            Muse English
          </Header>

          <AliceCarousel autoPlay autoPlayInterval="3000">
            <Image rounded raised src={"/analysis_example_3.png"} />
            <Image rounded raised src={"/analysis_example_2.png"} />
            <Image rounded raised src={"/analysis_example_4.png"} />
            <Image rounded raised src={"/analysis_example_1.png"} />
          </AliceCarousel>
          {/* 
          <Image.Group>
            <Image src="/analysis_example_3.png" />
            <Image src="/analysis_example_2.png" />
            <Image src="/analysis_example_4.png" />
            <Image src="/analysis_example_1.png" />
          </Image.Group> */}
        </Container>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "From your chat logs",
    render: () => (
      <Tab.Pane>
        <Visualization />
      </Tab.Pane>
    ),
  },
];

export class AIAnalysis extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAnalysis());
  }
  render() {
    return (
      <>
        <div style={{ backgroundColor: "#f1f1f1" }}>
          <Container textAlign="center" style={{ paddingTop: "3em" }}>
            <h3 className="aiAnlyzPage3">MUSE API 01</h3>
            <h1 className="aiAnlyzPage1">
              MUSE AI Analysis API
            </h1>
            <p>지금 MUSE AI분석 API를 체험해 보세요</p>
          </Container>

          <Container style={{ padding: "2em" }}>
            <Tab panes={panes} />

            {/* <Segment raised style={{ paddingTop: 40 }}>
              <Visualization />
            </Segment> */}
          </Container>
        </div>
        <Divider hidden />
        <Divider hidden />
        <h1 className="aiAnlyzPage1" style={{textAlign:"center" , marginTop:"100px"}}>
          Muse AI Analysis API <div className='fullWidthMobileBlock'></div> (selected)
        </h1>
        <div className="mobileDiveder"></div>

        <div className="aiAnlyzPageElementsDown" >
          <div className="aiAnalyzeMobileBlock">
          <Grid container stackable verticalAlign="top">
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image width="90px" src="/analysis1.jpg" />
                <Header>Reading Ability Measurement</Header>
                <p>
                  Measures reading ability from the difficulty of spoken / heard
                  sentences
                </p>
                <div className="mobileDiveder"></div>
                <div className="mobileDiveder"></div>
                <div className="mobileDiveder"></div>

              </Grid.Column>

              <Grid.Column>
                <Image width="90px" src="/analysis2.png" />
                <Header>
                  AI Analysis sentence variation & context relevance
                </Header>
                <p>
                  Analyzes the variety of spoken sentences' patterns and types.{" "}
                </p>
                <p>Analyzes context relevance of the conversation</p>
                <div className="mobileDiveder"></div>
                <div className="mobileDiveder"></div>
                <div className="mobileDiveder"></div>
              </Grid.Column>
              <Grid.Column>
                <Image width="90px" src="/analysis3.png" />
                <Header>Sentence Length</Header>
                <p>Measures the length of sentences in settled standards</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </div>


          <div className="mobileDiveder"></div>

          <Grid container stackable verticalAlign="top">
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image width="90px" src="/analysis4.png" />
                <Header>Reading Ability Measurement</Header>
                <p>
                  Measures reading ability from the difficulty of spoken / heard
                  sentences
                </p>
                <div className="mobileDiveder"></div>
                <div className="mobileDiveder"></div>
                <div className="mobileDiveder"></div>
              </Grid.Column>
              <Grid.Column>
                <Image width="90px" src="/analysis5.png" />
                <Header>
                  AI Analysis sentence variation & context relevance
                </Header>
                <p>
                  Analyzes the variety of spoken sentences' patterns and types.{" "}
                </p>
                <p>Analyzes context relevance of the conversation</p>
                <div className="mobileDiveder"></div>
                <div className="mobileDiveder"></div>
                <div className="mobileDiveder"></div>
              </Grid.Column>
              <Grid.Column>
                <Image width="90px" src="/analysis6.png" />
                <Header>Sentence Length</Header>
                <p>Measures the length of sentences in settled standards</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <Divider hidden />
        <Divider hidden />

        <NextLevel />
      </>
    );
  }
}

AIAnalysis = connect((store) => {
  return {
    data: store.data,
  };
})(AIAnalysis);
