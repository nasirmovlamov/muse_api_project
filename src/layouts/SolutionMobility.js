import { createMedia } from "@artsy/fresnel";
import React, { Component } from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";
import NextLevel from "../components/NextLevel";

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});
export class SolutionMobility extends Component {
  render() {
    return (
      <>
        <Segment
          style={{
            border: 0,
            padding: "0em 0em 0em 0em",
            backgroundColor: "#ffeee4",
          }}
          vertical
        >
          <Grid container stackable verticalAlign="middle">
            <Grid.Row style={{ height: "500px" }} columns={2}>
              <Grid.Column width={3}>
                <Header as="h3">MOBILITY </Header>
                <Header style={{ fontSize: "2em" }}>
                  Help/Substitute the Human Driver
                </Header>
                <Button color="orange" className="huge ui button">Talk to Sales</Button>
              </Grid.Column>
              <Grid.Column width={13}>
                <Image src="/mobility1.png" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />

        <Header as="h1" textAlign="center" style={{ fontSize: "3em" }}>
          Mobility{" "}
        </Header>

        <Divider hidden />

        <Grid container stackable verticalAlign="middle">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as="h3">Mobility</Header>
              <Header as="h1">Driving Companion</Header>
              <p>Muse is a memory based conversation generator. </p>
              <p>
                AI가 스스로 경험하고 학습하는 과정을 통해 자동차와 사람사이에
                자연스러운 직관 의사소통이 가능하고, 단순한 의사소통 분만 아니라
                운전자의 감정을 인지하고 공감학 수 있다.{" "}
              </p>
            </Grid.Column>
            <Grid.Column>
              <Image src="/mobility2.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden />
        <Divider hidden />

        <Divider hidden />
        <Divider hidden />

        <Grid container stackable verticalAlign="middle">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image src="/mobility3.png" />
            </Grid.Column>

            <Grid.Column>
              <Header as="h3">Mobility</Header>
              <Header as="h1">MUSE Memory Structure</Header>
              <p>Extracting semantically important parts in sentences</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden />
        <Divider hidden />

        <Divider hidden />
        <Divider hidden />

        <NextLevel />
      </>
    );
  }
}
