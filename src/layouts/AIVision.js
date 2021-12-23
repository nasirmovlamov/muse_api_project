import { createMedia } from "@artsy/fresnel";
import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import { connect } from "react-redux";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";
import NextLevel from "../components/NextLevel";
import { fetchAnalysis } from "../redux/actions/actions";
// import * as Scroll from 'react-scroll';
import { Link,  Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});
;

const scrollTo =() => {
  scroller.scrollTo('nextLevel', {
    duration: 1500,
    delay: 100,
    smooth: true,
    containerId: 'ContainerElementID',
    offset: 50, // Scrolls to element + 50 pixels down the page
  })
}

export class AIVision extends Component {
  
  scrollToDown() {
    scroller.scrollTo('nextLevel', {
      // duration: 1500,
      // delay: 100,
      // smooth: true,
      //offset:0,  Scrolls to element + 50 pixels down the page
    })
  }

  componentDidMount(){
    this.props.dispatch(fetchAnalysis());
    this.scrollToDown()
  }
  
  

  render() {
    return (
      <>
        <div style={{ backgroundColor: "#f1f1f1" }}>
          <Container textAlign="center" style={{ paddingTop: "3em" }}>
            <Header as="h3">MUSE API 03</Header>
            <Header as="h1" style={{ fontSize: "3em" }}>
              MUSE AI Vision API
            </Header>
            <p>지금 MUSE Vision API를 체험해 보세요</p>
          </Container>

          <Container style={{ padding: "2em" }}>
            <Segment raised style={{ paddingTop: 40 }} textAlign="center">
              {/* <Visualization /> */}

              <Header>Application on Palm Oil Fruit Ripeness Detection</Header>
              <AliceCarousel autoPlay autoPlayInterval="3000">
                <Image src="/palm1.png" />
                <Image src="/palm3.png" />
                <Image src="/palm4.png" />
                <Image src="/palm5.png" />
              </AliceCarousel>
              <Divider hidden />

              <Button
                color="orange"
                href="https://www.youtube.com/watch?v=I0WporBtMn8"
              >
                Watch Video
              </Button>
              <Divider />
              <Header>
                Application on Automated Indoor Plant Detection / Identification
              </Header>
              <AliceCarousel autoPlay autoPlayInterval="3000">
                <Image src="/indoor_plant_detection.png" />
                <Image src="/indoor_plant_analysis.png" />
              </AliceCarousel>
              <Divider hidden />

              <Button
                href="https://www.youtube.com/watch?v=GpN6yfDqhAY"
                color="orange"
              >
                Watch Video
              </Button>
            </Segment>
          </Container>
        </div>
        <Divider hidden />
        <Divider hidden />

        <Header as="h1" textAlign="center" style={{ fontSize: "3em" }}>
          Muse AI Vision API
        </Header>
        <Divider hidden />
        <Divider hidden />

        <div style={{ padding: 50 }}>
          <Grid container stackable verticalAlign="top">
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image width="90px" src="/Framevision1.png" />
                <Header>Facial Expression Analysis</Header>
                <p>
                  AI Auggestion based cooperative chat system (including the
                  corpus){" "}
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image width="90px" src="/Framevision2.png" />
                <Header>Object Detection</Header>
                <p>
                  Learning Material (Books, etc.) based AI conversation engine
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image width="90px" src="/Framevision3.png" />
                <Header>Scene Description</Header>
                <p>
                  Curriculum based repetitive studying system with real time
                  feedback
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider hidden />

          <Grid container stackable verticalAlign="top">
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image width="90px" src="/Framevision4.png" />
                <Header>Human Detection</Header>
                <p>
                  Extracting meaningfully important parts in sentences (names,
                  regions, etc.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image width="90px" src="/Framevision5.png" />
                <Header>Plant Identification</Header>
                <p>
                  Extracting meaningfully important parts in sentences (names,
                  regions, etc.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image width="90px" src="/Framevision6.png" />
                <Header>Plant Status Identification</Header>
                <p>
                  Extracting meaningfully important parts in sentences (names,
                  regions, etc.
                </p>
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

AIVision = connect((store) => {
  return {
    data: store.data,
  };
})(AIVision);
