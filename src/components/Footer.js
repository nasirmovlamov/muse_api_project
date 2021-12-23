import { color } from "echarts";
import React from "react";
import { Container, Grid, Header, List, Segment, Accordion, Icon } from "semantic-ui-react";

export default function Footer() {
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState();

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index

    setActiveIndex(newIndex);
  }

  return (
    <Segment vertical style={{ padding: "5em 0em" }} inverted>
        <div style={{ paddingLeft: "32px" }}>
        <Accordion inverted className="hide-in-desktop">
            <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={handleClick}
            >
                <Icon name='dropdown' />
                Product
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
            <div style={{ paddingLeft: "20px" }}>
                <List link inverted>
                    <List.Item as="a" href="/">
                        Muse API
                    </List.Item>
                    <List.Item as="a" href="/ai/analysis/">
                        Muse Analysis API
                    </List.Item>
                    <List.Item as="a" href="/ai/chat/">
                        Muse Chat API
                    </List.Item>
                    <List.Item as="a" href="/ai/vision/">
                        Muse Vision API
                    </List.Item>
                </List>
            </div>
            </Accordion.Content>

            <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={handleClick}
            >
            <Icon name='dropdown' />
                Solutions
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
            <div style={{ paddingLeft: "20px" }}>
                <List link inverted>
                    <List.Item as="a" href="/solution/education">
                        Education
                    </List.Item>
                    <List.Item as="a" href="/solution/enterprise">
                        Enterprise
                    </List.Item>
                    <List.Item as="a" href="/solution/health">
                        Healthcare / Well Being
                    </List.Item>
                    <List.Item as="a" href="/solution/mobility">
                        Mobility
                    </List.Item>
                </List>
            </div>
            </Accordion.Content>

            <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={handleClick}
            >
            <Icon name='dropdown' />
                Pricing
            </Accordion.Title>
            <Accordion.Content>
            <div style={{ paddingLeft: "20px" }}>
                {/* Here will be Pricing Content */}
            </div>
            </Accordion.Content>

            <Accordion.Title
                active={activeIndex === 3}
                index={3}
                onClick={handleClick}
            >
            <Icon name='dropdown' />
                Company
            </Accordion.Title>
            <Accordion.Content>
            <div style={{ paddingLeft: "20px" }}>
                {/* Here will be Company Content */}
            </div>
            </Accordion.Content>
        </Accordion>
        </div>
      <Container className="hide-in-mobile">
        <Grid stackable>
          <Grid.Row columns={4}>
            <Grid.Column>
              <Header as="a" content="Product" inverted />
              <List link inverted>
                <List.Item as="a" href="/">
                  Muse API
                </List.Item>
                <List.Item as="a" href="/ai/analysis/">
                  Muse Analysis API
                </List.Item>
                <List.Item as="a" href="/ai/chat/">
                  Muse Chat API
                </List.Item>
                <List.Item as="a" href="/ai/vision/">
                  Muse Vision API
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as="a" content="Solutions" inverted />
              <List link inverted>
                <List.Item as="a" href="/solution/education">
                  Education
                </List.Item>
                <List.Item as="a" href="/solution/enterprise">
                  Enterprise
                </List.Item>
                <List.Item as="a" href="/solution/health">
                  Healthcare / Well Being
                </List.Item>
                <List.Item as="a" href="/solution/mobility">
                  Mobility
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as="a" href="/pricing" content="Pricing" inverted />
            </Grid.Column>
            <Grid.Column>
              <Header
                as="a"
                href="https://www.akaintelligence.com/"
                content="Company"
                inverted
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}
