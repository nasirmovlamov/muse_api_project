import { createMedia } from "@artsy/fresnel";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Container,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Input,
  Loader,
  Message,
  Popup,
  Segment,
  Select,
} from "semantic-ui-react";
import NextLevel from "../components/NextLevel";
import { chatLC, fetchTopicList } from "../redux/actions/actions";

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});
const levelOptions = [
  { key: "hard", text: "Hard", value: "hard" },
  { key: "mid", text: "Medium", value: "mid" },
  { key: "easy", text: "Easy", value: "easy" },
];


export class AIChat extends Component {
  state = {
    topicModalOpen: false,
    selectedTopic: "School",
    selectedDifficulty: "hard",
  };
  componentDidMount() {
    this.props.dispatch(fetchTopicList());
  }
  render() {
    if (this.props.data.fetchingTopicList) {
      return <Loader active />;
    }
    return (
      <>
        <div style={{ backgroundColor: "#f1f1f1" }}>
          <Container textAlign="center" style={{ paddingTop: "3em" }}>
            <Header as="h3">MUSE API 02</Header>
            <Header as="h1" style={{ fontSize: "3em" }}>
              MUSE AI Chat API
            </Header>
            <p>지금 MUSE AI Chat API를 체험해 보세요</p>
          </Container>

          <Container style={{ padding: "2em" }}>
            <Segment raised style={{}}>
              <Form>
                <Form.Group widths="equal">
                  <Form.Field
                    required
                    defaultValue="hard"
                    control={Select}
                    options={levelOptions}
                    label="Difficulty"
                    placeholder="Select difficulty"
                    onChange={(e, v) => {
                      console.log(v.value);
                      this.setState({ selectedDifficulty: v.value });
                    }}
                  />
                  <Form.Field
                    required
                    defaultValue="School"
                    control={Select}
                    options={this.props.data.topicDropdownOptions}
                    label="Topic"
                    placeholder="Select topic"
                    onChange={(e, v) => {
                      console.log(v.value);
                      this.setState({ selectedTopic: v.value });
                    }}
                  />
                </Form.Group>
              </Form>

              <div>
                <Grid>
                  <Grid.Row columns={2} divided>
                    <Grid.Column>
                      <div
                        ref={this.handleContextRef}
                        style={{ paddingTop: 20 }}
                      >
                        <Grid>
                          {this.props.data.chatHistory.map((el, idx) => {
                            return (
                              <Grid.Row key={`conversation_${idx}`}>
                                <Grid.Column>
                                  <Segment
                                    style={{ padding: 10 }}
                                    inverted
                                    color={
                                      el.sender === "bot" ? "green" : "blue"
                                    }
                                    floated={
                                      el.sender === "bot" ? "left" : "right"
                                    }
                                  >
                                    <div>{el.msg}</div>
                                  </Segment>
                                </Grid.Column>
                              </Grid.Row>
                            );
                          })}
                        </Grid>
                      </div>
                    </Grid.Column>

                    <Grid.Column>
                      <div>
                        <Segment basic>
                          <Header>
                            Reply
                            <Header.Subheader>
                              will not be saved
                            </Header.Subheader>
                          </Header>

                          <Button
                            onClick={() => {
                              this.props.dispatch(
                                chatLC(
                                  null,
                                  "hi",
                                  this.state.selectedTopic,
                                  this.state.selectedDifficulty,
                                  "rammi_test"
                                )
                              );
                            }}
                            fluid
                            inverted
                            color="orange"
                            disabled={
                              this.props.data.topicDropdownOptions.length === 0
                            }
                          >
                            Start new session
                          </Button>

                          {this.props.data.lastBotUttId &&
                            this.props.data.suggestedResponses &&
                            this.props.data.suggestedResponses.length > 0 && (
                              <Header>Suggested Responses</Header>
                            )}
                          {this.props.data.suggestedResponses.map((el, idx) => {
                            return (
                              <Popup
                                key={`popup_suggestion_${idx}`}
                                trigger={
                                  <Segment
                                    onClick={() => {
                                      if (
                                        this.props.data.chatHistory.length < 10
                                      ) {
                                        this.props.dispatch(
                                          chatLC(
                                            this.props.data.lastBotUttId,
                                            el.text,
                                            this.state.selectedTopic,
                                            this.state.selectedDifficulty,
                                            "rammi_test"
                                          )
                                        );
                                      }
                                    }}
                                    key={`suggestion_${idx}`}
                                    inverted
                                    color={
                                      this.props.data.chatHistory.length < 10
                                        ? "teal"
                                        : "grey"
                                    }
                                  >
                                    <div>{el.text}</div>
                                  </Segment>
                                }
                                inverted
                                position="right center"
                                content="In the actual usage case, students would be prompted to speak this out loud."
                              />
                            );
                          })}
                          <Divider />
                          <Message
                            error={this.props.data.chatHistory.length > 8}
                          >
                            Contact us for more!
                          </Message>
                          {false && <Header>Write your own response</Header>}

                          {false && (
                            <Segment inverted color="blue">
                              <div>
                                <Input
                                  fluid
                                  action
                                  attached="top"
                                  onChange={(e, v) => {
                                    const value = v.value.replace("\n", " ");
                                    this.setState({ body: v.value });
                                  }}
                                  placeholder="Your reply"
                                >
                                  <input />
                                  <Button
                                    onClick={() => {
                                      this.props.dispatch(
                                        chatLC(
                                          this.props.data.lastBotUttId,
                                          this.state.body,
                                          this.state.selectedTopic,
                                          this.state.selectedDifficulty,
                                          "rammi_test"
                                        )
                                      );
                                    }}
                                  >
                                    <Icon name="send" />
                                  </Button>
                                </Input>
                              </div>
                            </Segment>
                          )}
                        </Segment>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </Segment>
          </Container>
        </div>
        <Divider hidden />
        <Divider hidden />
        <Header as="h1" textAlign="center" style={{ fontSize: "3em" }}>
          Muse AI Chat API
        </Header>
        <Divider hidden />
        <Divider hidden />

        <div style={{ padding: 50 }}>
          <Grid container stackable verticalAlign="top">
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image width="90px" src="/chat1.png" />
                <Header>Learner's Chat API</Header>
                <p>
                  AI Auggestion based cooperative chat system (including the
                  corpus){" "}
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image width="90px" src="/chat2.png" />
                <Header>Easy Mode Chat API</Header>
                <p>
                  Learning Material (Books, etc.) based AI conversation engine
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image width="90px" src="/chat3.png" />
                <Header>Edu Mode Education API</Header>
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
                <Image width="90px" src="/chat4.png" />
                <Header>Extracting Meaningful Words in Spoken Sentences</Header>
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

AIChat = connect((store) => {
  return {
    data: store.launcherapi,
  };
})(AIChat);
