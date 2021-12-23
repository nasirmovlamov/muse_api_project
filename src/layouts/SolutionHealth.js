import { createMedia } from "@artsy/fresnel";
import React, { Component } from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
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
export class SolutionHealth extends Component {
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
                <Header as="h3">
                  HEALTHCARE
                  <br />
                  WELL BEING
                </Header>
                <Header style={{ fontSize: "2em" }}>
                  Help/Substitute the Care Giver
                </Header>
                <Button color="orange" className="huge ui button">Talk to Sales</Button>
              </Grid.Column>
              <Grid.Column width={13}>
                <Image src="/healthsvg.png" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />

        <Header as="h1" textAlign="center" style={{ fontSize: "3em" }}>
          Healthcare / Well Being
        </Header>

        <Divider hidden />

        <Grid container stackable verticalAlign="middle">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image src="/health1.png" />
            </Grid.Column>

            <Grid.Column>
              <Header as="h3">Healthcare / Well being</Header>
              <Header as="h1">ReSmart</Header>
              <p>
                Prividing Artificial Intelligence life-coaching for everyone
                with brain training program, meditation and recommended daily
                activities that are designed to improve cognitive skills.
              </p>
              <p>Improve five main cognitive skills.</p>
              <p>Relieve stress and the resulting risk of depression</p>
              <p>
                Provides daily activities for keeping your body and brain fit{" "}
              </p>
              <p>Track your improvements. </p>

              <a href="https://akaon.com/resmart" style={{ color: "#F2711C" }}>
                Learn more <Icon name="arrow right" />
              </a>
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
              <Header as="h3">Healthcare / Well being</Header>
              <Header as="h1">Musio Alive X Selective Mutism</Header>
              <p>
                장애 학생 대상의 AI로봇 교육 검증은 일본의 한 중학교 특수
                학급에서 이뤄졌다. 테스트 결과, "선택적 함묵증 (선택적으로 말을
                하지 않는 증상)" 으로 소통이 어려웠던 학생도 말문을 여는 변화가
                있었다.{" "}
              </p>
              <p>
                외국어 학습이나 말하기 학습에 소극적인 학생들의 학습 관심도가
                높아진 것이 확인됐다. 영어를 적극적으로 소리내 말하거나, 발음
                연습에 집중하는 등 학습 태도 개선 효과도 관찰됐다.{" "}
              </p>
              <a href="https://akaon.com/resmart" style={{ color: "#F2711C" }}>
                Learn more <Icon name="arrow right" />
              </a>
            </Grid.Column>

            <Grid.Column>
              <Image src="/health2.png" />
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
