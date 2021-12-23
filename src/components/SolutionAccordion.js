import React, { Component } from "react";
import {
  Accordion,
  Button,
  Grid,
  Header,
  Icon,
  Image,
  List,
} from "semantic-ui-react";

const accordionStyle = {
  marginRight: "10%",
  borderLeft: "solid #f37021 3px",
  borderRight: "solid #d1d6db 1px",
  borderTop: "solid #d1d6db 1px",
  borderBottom: "solid #d1d6db 1px",
  padding: "15px",
};
export default class SolutionAccordion extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Grid stackable verticalAlign="top">
        <Grid.Row columns={2}>
         {!this.props.isMobile&&  <Grid.Column>
            {activeIndex === 0 && (
              <Image src="/solution_accordion_education.png" className="hide-in-mobile" />
            )}
            {activeIndex === 1 && (
              <Image src="/solution_accordion_enterprise.png" className="hide-in-mobile" />
            )}
            {activeIndex === 2 && (
              <Image src="/solution_accordion_healthcare.png" className="hide-in-mobile" />
            )}
            {activeIndex === 3 && (
              <Image src="/solution_accordion_mobility.png" className="hide-in-mobile" />
            )}
          </Grid.Column>}
         
          <Grid.Column>
            <Accordion fluid>
              {" "}
              <Accordion.Title
                as={Header}
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                Education
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <div style={accordionStyle}>
                  <p>Help/substitute English native teacher</p>
                  <List bulleted>
                    <List.Item>MUSE Educational API</List.Item>
                    <List.Item>Musio English</List.Item>
                    <List.Item>Contents publishing & partnerships</List.Item>
                  </List>
                <a href="/solution/education" style={{ color: "#F2711C" }}>
                    Learn more <Icon name="arrow right" />
                </a>
                </div>
              </Accordion.Content>
              <Accordion.Title
                as={Header}
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                Enterprise
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <div style={accordionStyle}>
                  <List bulleted>
                    <List.Item>Muse J X Ken Robotech</List.Item>
                    <List.Item>Muse J X VAIO</List.Item>
                  </List>
                  <a href="/solution/enterprise" style={{ color: "#F2711C" }}>
                    Learn more <Icon name="arrow right" />
                  </a>
                </div>
              </Accordion.Content>
              <Accordion.Title
                as={Header}
                active={activeIndex === 2}
                index={2}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                Healthcare & Well being
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <div style={accordionStyle}>
                  <List bulleted>
                    <List.Item>ReSmart</List.Item>
                    <List.Item>Musio Alive X Selective Mutism</List.Item>
                  </List>
                  <a href="/solution/health" style={{ color: "#F2711C" }}>
                    Learn more <Icon name="arrow right" />
                  </a>
                </div>
              </Accordion.Content>
              <Accordion.Title
                as={Header}
                active={activeIndex === 3}
                index={3}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                Mobility
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 3}>
                <div style={accordionStyle}>
                  <List bulleted>
                    <List.Item>Driving Companion</List.Item>
                    <List.Item>MUSE Memory Structure</List.Item>
                  </List>
                  <a href="/solution/mobility" style={{ color: "#F2711C" }}>
                    Learn more <Icon name="arrow right" />
                  </a>
                </div>
              </Accordion.Content>
            </Accordion>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
