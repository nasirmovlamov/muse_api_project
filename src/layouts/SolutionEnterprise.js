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
export function SolutionEnterprise() {
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
                    <h3 className='pageTopParth3' >ENTERPRISE</h3>
                    <h1 className='pageTopParth1' style={{width:isMobile ? "251px" :"auto" , margin:"auto"}}>
                      Help/Substitute {!isMobile && <br/>}Human Workers for Enterprise
                    </h1>
                    {/* <p>
                      Muse integrates Deep Learning based AI and big data to
                      effectively deliver essential communication tools.
                    </p> */}

                    {!isMobile && <button className="pageTopPartButton" color="orange">Talk to Sales</button>}
                  </div>
                </div>
                {isMobile && <Divider hidden />}


                {isMobile && <img alt="" src="/enterprise_mobile.png" className='solutionPageTopImageMobile' />}
                {!isMobile && <img alt="" width={1080} height={536} src="/enterprise1.png" className='solutionPageTopImage' />}

                {isMobile && <button style={{width:"180px"}} className="pageTopPartButton" color="orange">Talk to Sales</button>}
                {isMobile && <Divider hidden />}
                {isMobile && <Divider hidden />}
                {isMobile && <Divider hidden />}


              </div>
        </div>

        <div className='solution-divider'></div>

        

        <Header as="h1" textAlign="center" style={{ fontSize: "3em" }}>
          Enterprise
        </Header>

        <Divider hidden />

        <Grid container stackable verticalAlign="middle">
          <Grid.Row columns={2}>
            {isMobile &&<Grid.Column>
              <Image style={{width:isMobile ? "311px" : "auto" , margin:"auto"}} src="/enterprise2.png" />
            </Grid.Column>}



            <Grid.Column>
              <Header as="h3">Enterprise</Header>
              <Header as="h1">Muse J X Ken Robotech</Header>
              <p>
                Ken Robotech Corp. announcement of joint development contract
                between AKA and Ken Robotech for work robots equipped with voice
                communication function to improve the productivity of
                construction sites.{" "}
              </p>
              <p>
                Develoed and sold by Ken Robotech and reduce the burden on
                workers.
              </p>

              {
                !isMobile &&
                <a href="#" style={{ color: "#F2711C" }}>
                Learn more <Icon name="arrow right" />
              </a>}

              {isMobile &&   <a  className='mobileLinkMainWatchVideo' href="#" style={{ color: "#F2711C" }}>Learn More <Icon name="arrow right" /></a>}

              

            </Grid.Column>
            {!isMobile &&
            <Grid.Column>
              <Image src="/enterprise2.png" />
            </Grid.Column>
            }
          </Grid.Row>
        </Grid>

        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />

        <Grid container stackable verticalAlign="middle">
          <Grid.Row columns={2}>
            {!isMobile &&
            <Grid.Column>
              <Image src="/enterprise3.png" />
            </Grid.Column>
            }
            {
              isMobile &&
              <Grid.Column>
                <Image style={{width:isMobile ? "311px" : "auto" , margin:"auto"}} src="/enterprise3.png" />
              </Grid.Column>
            }

            <Grid.Column>
              <Header as="h3">ENTERPRISE</Header>
              <Header as="h1">Muse J X VAIO</Header>
              <p>
                (NEED TEXT) Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              

              {!isMobile &&  <a href="https://musioenglish.kr/" style={{ color: "#F2711C" }}>
                Go to the website <Icon name="arrow right" />
              </a>}
              {isMobile &&   <a  className='mobileLinkMainWatchVideo' href="/ai/chat/" style={{ color: "#F2711C" }}>Go to the Website <Icon name="arrow right" /></a>}
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
