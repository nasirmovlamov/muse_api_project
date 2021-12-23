import { createMedia } from "@artsy/fresnel";
import React, { Component } from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment,
} from "semantic-ui-react";
import NextLevel from "../components/NextLevel";
import "../assets/global/components/education.css"
import { useMediaQuery } from 'react-responsive'

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});
export function SolutionEducation() {

  const isMobile = useMediaQuery({query: '(max-width: 768px)'})

  return (
      <>
        <div
          style={{
            padding: "0em 0em 0em 0em",
            border: 0,
            backgroundColor: "#ffeee4",
            display: 'flex',
            alignItems:"center",
            justifyContent:"center",
          }}
          vertical
        >
            <div className="pageTopPartEducationSolution"  columns={2} >
              <div className="flex pageTopPartTextPartEducationSolution">
                <div className="flex-c" >
                  <h3 className='pageTopParth3' >EDUCATION</h3>
                  <h1 className='pageTopParth1' style={{width:isMobile ? "251px" :"auto" , margin:"auto"}}>
                    Help/Substitute {!isMobile && <br/>} English Native Teacher
                  </h1>
                  {/* <p>
                    Muse integrates Deep Learning based AI and big data to
                    effectively deliver essential communication tools.
                  </p> */}

                  {!isMobile && <button className="pageTopPartButton" color="orange">Talk to Sales</button>}
                </div>
              </div>
              {isMobile && <Divider hidden />}


              {isMobile && <img alt="" src="/edu_img_mobile.png" className='solutionPageTopImageMobile' />}
              {!isMobile && <img alt="" src="/edu-img.png" className='solutionPageTopImage' />}

              {isMobile && <button style={{width:"180px"}} className="pageTopPartButton" color="orange">Talk to Sales</button>}
              {isMobile && <Divider hidden />}
              {isMobile && <Divider hidden />}
              {isMobile && <Divider hidden />}


            </div>
        </div>

        <div className='solution-divider'></div>

        <h1 className='pageTopParth1' style={{textAlign:"center"}}>
          Education
        </h1>

        <Divider hidden />

        <Grid container stackable verticalAlign="middle">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image style={{width:isMobile ? "311px" : "auto" , margin:"auto"}} src="/edugirl.png" />
            </Grid.Column>

            <Grid.Column>
              <Header as="h3">EDUCATION</Header>
              <Header as="h1">MUSE Educational API</Header>
              <p>
                MUSE will attempt to understand your textual language, oral
                language, gestures, and facial expressions. This way, MUSE can
                communicate with you as a whole.
              </p>
              <List bulleted>
                <List.Item>
                  Muse API X CDL
                  <List.List>
                    <List.Item>Vena Talk</List.Item>
                    <List.Item>More than 96% conversion rate</List.Item>
                  </List.List>
                </List.Item>
                <List.Item>
                  Muse API X Softbank Robotics China
                  <List.List>
                    <List.Item>Pepper</List.Item>
                    <List.Item>more than 2000 Pepper</List.Item>
                  </List.List>
                </List.Item>
                <List.Item>Muse X Oxford University Press</List.Item>
              </List>
              {
                !isMobile &&
                <a href="#" style={{ color: "#F2711C" }}>
                Learn more <Icon name="arrow right" />
              </a>}

              {isMobile && <Divider hidden />}
              {isMobile && <Divider hidden />}
              {isMobile &&   <a  className='mobileLinkMainWatchVideo' href="/ai/chat/" style={{ color: "#F2711C" }}>Go to the Website <Icon name="arrow right" /></a>}
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />

        {isMobile &&
            <Grid.Column>
              <Image style={{width:isMobile ? "311px" : "auto" , margin:"auto"}} src="/edu2.png" />
          </Grid.Column>}
          {isMobile && <Divider hidden />}
          {isMobile && <Divider hidden />}
        <Grid container stackable verticalAlign="middle">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as="h3">EDUCATION</Header>
              <Header as="h1">Musio English</Header>
              <p>
                Musio is the only verified AI Robot in Public schools. 163
                schools in Japan and Korea are using Musio to teach (as of Jan.
                2021). Student survey shows using Musio increases speaking
                confidence of 70% of the students.
              </p>
              <List bulleted>
                <List.Item>Muse API X Cambridge University Press</List.Item>
                <List.Item>
                  Muse API X Online Video English
                  <List.List>
                    <List.Item>Musio X Kimini (Gakken)</List.Item>
                    <List.Item>64.2% CVR</List.Item>
                  </List.List>
                </List.Item>
              </List>
              {isMobile && <Divider hidden />}
              {isMobile && <Divider hidden />}
              {!isMobile &&  <a href="https://musioenglish.kr/" style={{ color: "#F2711C" }}>
                Go to the website <Icon name="arrow right" />
              </a>}
              {isMobile &&   <a  className='mobileLinkMainWatchVideo' href="/ai/chat/" style={{ color: "#F2711C" }}>Go to the Website <Icon name="arrow right" /></a>}

            </Grid.Column>

            {!isMobile &&
            <Grid.Column>
              <Image style={{width:isMobile ? "311px" : "auto" , margin:"auto"}} src="/edu2.png" />
            </Grid.Column>}
          </Grid.Row>
        </Grid>

        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />

        <Grid container stackable verticalAlign="middle">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image style={{width:isMobile ? "311px" : "auto" , margin:"auto"}} src="/edu3.png" />
            </Grid.Column>

            <Grid.Column>
              <Header as="h3">EDUCATION</Header>
              <Header as="h1">Contents Publishing & Partnerships</Header>
              <List bulleted>
                <List.Item>180+ Educational Books Publications</List.Item>
                <List.Item>
                  Self produced contents providing the best education contents
                  led by a co-founder of a top tier educational company in Korea
                  (Hackers Edu. group)
                </List.Item>
                <List.Item>Partnership objectives & outcomes</List.Item>
                <List.Item>
                  Partnering with the best-selling education company (local
                  market)
                </List.Item>
                <List.Item>Content development with publishers</List.Item>
                <List.Item>Various levels for target users</List.Item>
              </List>
              {isMobile && <Divider hidden />}
              {isMobile && <Divider hidden />}
              {!isMobile &&  <a href="#" style={{ color: "#F2711C" }}>Learn more <Icon name="arrow right" /></a>}
              {isMobile &&   <a  className='mobileLinkMainWatchVideo' href="/ai/chat/" style={{ color: "#F2711C" }}>Go to the Website <Icon name="arrow right" /></a>}

            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div>
        <Divider hidden />
        <Divider hidden />

        <Divider hidden />
        <Divider hidden />
        </div>
        <Segment
          style={{ padding: isMobile ? "3em 0em" : "8em 0em", border: 0, backgroundColor: "#ffeee4" }}
          vertical
        >

          <Grid container stackable verticalAlign="middle">
            <Grid.Row columns={2}>
              {isMobile &&
                <Grid.Column>
                <Image style={{width:isMobile ? "103px" :"auto", float:'right'}} src="/edu5.png" />
                <Image  src="/edu4.png" />
              </Grid.Column>}

              <Grid.Column>
                <Header as="h3">MUSE API를 도입한 회사</Header>
                <Header as="h1">Chungdahm Learning Vena Talk</Header>
                <p>
                  Vena Talk is a learning app that enables free talking with
                  corpu based AI engine. 1. Practice 2. Role play 3. Fee talk
                  with 3 steps, students can learn expressions, conversation
                  patterns and talk freely.
                </p>
                

                {!isMobile &&  <a href="https://apps.apple.com/kr/app/april%EB%B9%84%EB%82%98%ED%86%A1/id1486317712" style={{ color: "#F2711C" }}>
                    Check it out <Icon name="arrow right" />
                </a>}
                {isMobile && <Divider hidden />}
                {isMobile && <Divider hidden />}
              {isMobile &&   <a  className='mobileLinkMainWatchVideo' href="/ai/chat/" style={{ color: "#F2711C" }}>Watch a video <Icon name="arrow right" /></a>}

              </Grid.Column>
                {!isMobile &&
                <Grid.Column>
                <Image src="/edu5.png" />
                <Image src="/edu4.png" />
              </Grid.Column>}
            </Grid.Row>

            {isMobile &&
            <div style={{width:"100%", display:"flex" , margin:"auto", justifyContent:"space-between"}} >
                <Image width="76px" src="/icon1.png" />
                <Image width="110px" src="/icon2.png" />
                <Image  width="75px"src="/icon3.png" />
            </div>
            }
            {!isMobile &&
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image src="/icon1.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="/icon2.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="/icon3.png" />
              </Grid.Column>
            </Grid.Row>
            }
          </Grid>
        </Segment>
        <NextLevel />
      </>
    )
}
