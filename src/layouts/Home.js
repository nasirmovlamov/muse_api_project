import { createMedia } from "@artsy/fresnel";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";
import NextLevel from "../components/NextLevel";
import SolutionAccordion from "../components/SolutionAccordion";
import "../styles/queries.css";
import "../assets/mobile/Home.css"
import { useMediaQuery } from 'react-responsive'
import { MusioTalk } from "../components/MusioTalk";

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

export function Home() {
  const isMobile = useMediaQuery({query: '(max-width: 768px)'})

  return (<>

        <Container>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row columns={2}>
              <Grid.Column width={7}>
                <div className="mobileAiImageCont"> 
                  <Image src="/muse.png" />
                </div>
                <h1 className='mainTopHeader'>AI Communication Engine</h1> 
                {/* <Divider hidden /> */}
                <p className="mainTopContent">
                  Muse integrates Deep Learning based AI and big data to
                  effectively deliver essential communication tools.
                </p>
                {
                !isMobile &&
                  <>
                  <Divider hidden />{" "}
                  <Divider hidden />{" "}
                  <Divider hidden />{" "}
                  </>
                }
                {
                isMobile &&
                <Grid.Column width={9}>
                  <Image src="/homepagelogo.png" width='310px' style={{margin:"auto"}}/>
                </Grid.Column>
                }

                <div className='mainButtonContTop'>
                <Button  href="/sales/" color="orange" className="huge ui button" >
                  Talk to Sales
                </Button>
                <Button
                  href="https://apps.apple.com/kr/app/april%EB%B9%84%EB%82%98%ED%86%A1/id1486317712"
                  inverted
                  color="orange"
                  className="huge ui button"
                >
                  Start a free trial
                </Button>

                </div>
               
              </Grid.Column>
              {!isMobile &&
                <Grid.Column width={9}>
                  <Image src="/homepagelogo.png"/>
                </Grid.Column>
              }
              
            </Grid.Row>
          </Grid>
        </Container>
        {
          !isMobile &&
            <>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            </>
        }

        { isMobile &&<Divider hidden />}


        <Grid
          celled="internally"
          columns="equal"
          stackable
          style={{ padding:isMobile ? "1em 0em" :  "4em 0em", backgroundImage: "url(/watchvid.png)" }}
        >
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
              <p className="mobileMainTextWidth">
                MUSE API는통합론적 접근방식을 통해 인간 수준에 <br />
                근접한 커뮤니케이션을 가능하게 합니다.
              </p>
              </Header>
              <Divider hidden />
              <Divider hidden />
              <Divider hidden />
              <a className="mobileLinkMainWatchVideo" href="#" style={{ color: "#F2711C" }}>Watch a video <Icon name="arrow right" /></a>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {
          !isMobile &&
            <>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            </>
        }

      {
          isMobile &&
            <>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            </>
        }

        <Grid container stackable verticalAlign="middle">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as="h3">MUSE API 01</Header>
              <Header as="h1">MUSE AI Analysis API</Header>
              <p >
                사용자가 발화한 대화를 분석하는 기술입니다. 발화된 문장의 구조와
                패턴을 인식해 문장의 다양성을 분석하고, 전체 대화내 문맥은 물론,
                사용자가 발화한문장, 단어, 발음을 분석합니다.{" "}
              </p>
              <a className="mobileLinkMainWatchVideo" href="/ai/analysis/" style={{ color: "#F2711C" }}>API 체험하기 <Icon name="arrow right" /></a>
            </Grid.Column>
            { !isMobile &&
              <Grid.Column>
              <Image src="/introanalysis.png"/>
              </Grid.Column>
            }
          </Grid.Row>
        </Grid>

        { !isMobile &&
        <div>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        </div>
        }

      { isMobile &&
        <div>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        </div>
        }
        

        <Grid className='mobileVersionMuseApi' container stackable verticalAlign="middle">
          <Grid.Row columns={2}>
            { !isMobile &&
              <Grid.Column>
                <Image src="/mobilechat.png"/>
              </Grid.Column>
            }
            <Grid.Column>
              <Header as="h3">MUSE API 02</Header>
              <Header as="h1">MUSE AI Chat API</Header>
              <p className="changeTextWidth">
                ASR기술과 음성 합성 기술을 기반으로 음성을 텍스트로, 텍스트를
                음성으로 변환이 가능합니다. 학습 교재와 커리큘럼을 챗봇으로
                구현하고, 인공지능이 제안하는 답변 문장을 보며 영어 교육용 API를
                제공합니다.{" "}
              </p>
              <a  className='mobileLinkMainWatchVideo' href="/ai/chat/" style={{ color: "#F2711C" }}>API 체험하기 <Icon name="arrow right" /></a>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        { !isMobile &&
        <div>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        </div>
        }

      { isMobile &&
        <div>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        </div>
        }
        
        
        <Grid className='mobileVersionMuseApi' container stackable verticalAlign="middle">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as="h3">MUSE API 03</Header>
              <Header as="h1">MUSE AI Vision API</Header>
              <p>
                사용자를 매칭하고 사용자의 표정을 인식할 수 있습니다. 사물을
                분석하여 어떤 사물인지 파악하고, 식물 객체를 인식하여 인식하는
                대상이 식물이거나 열매인지 구별해 식물의 상태, 수확적합시기 등을
                분석하여 통합적으로 인식합니다.{" "}
              </p>

              <a href="/ai/vision/" style={{ color: "#F2711C" }}>API 체험하기 <Icon name="arrow right" /></a>

            </Grid.Column>
            { !isMobile &&
            <Grid.Column>
              <Image src="/homevision.png"/>
            </Grid.Column>
            }
          </Grid.Row>
        </Grid>

        { !isMobile &&
        <div>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        </div>
        }

      { isMobile &&
        <div>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        </div>
        }
        

        <Header as="h1" textAlign="center" style={{ fontSize: "3em" }}>
          Solutions
        </Header>

        { !isMobile &&
        <div>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        </div>
        }

        <SolutionAccordion isMobile={isMobile} />

        <Divider hidden />
        <Divider hidden />




        <Segment
          style={{
            padding: isMobile ? "6em 1em" : "8em",
            border: 0,
            backgroundColor: "#f7f7f8",
          }}
          vertical
        >
          <Grid container stackable verticalAlign="middle">
            <Grid.Row columns={2}>
              <Grid.Column>
                <Header style={{fontSize: "15px", margin:"0px"}} as="h3">MUSE API를 도입한 회사</Header>
                <Header as="h1">Chungdahm Learning Vena Talk</Header>
                <p>
                  Vena Talk is a learning app that enables free talking with
                  corpu based AI engine. 1. Practice 2. Role play 3. Fee talk
                  with 3 steps, students can learn expressions, conversation
                  patterns and talk freely.
                </p>

              {!isMobile &&<a
                href="https://apps.apple.com/kr/app/april%EB%B9%84%EB%82%98%ED%86%A1/id1486317712"
                style={{ color: "#F2711C" }}
              >
                Check it out <Icon name="arrow right" />
              </a>}
              {isMobile &&
                <div>
              <Divider hidden />
              <Divider hidden />
              <Divider hidden />
              </div>}

              {isMobile &&<a  className="mobileLinkMainWatchVideo" href="#" style={{ color: "#F2711C" }}>Watch a video <Icon name="arrow right" /></a>}


              </Grid.Column>
              {!isMobile && <Grid.Column>
                <Image src="/edu5.png"/>
                <Image src="/edu4.png"/>
              </Grid.Column>}
            </Grid.Row>
          </Grid>


          <Grid container stackable verticalAlign="middle" style={{marginTop:'189px'}}>
            <Grid.Row columns={2}>
              <MusioTalk/>
            </Grid.Row>
          </Grid>


              <div style={{width:'100%', display:"flex" , justifyContent:'center'}}>
          {!isMobile &&
          <Grid stackable style={{ paddingTop: isMobile ? "1em" : "8em" }} centered columns={2}>
            <Grid.Row columns={3}>
              <Grid.Column textAlign="center">
                <Image width={isMobile ? "83px" : 'auto'} src="/logo_softbank.png" />
              </Grid.Column>
              <Grid.Column textAlign="center" style={{display:'flex' , justifyContent:'center'}}>
                <Image  width={isMobile ? "83px" : 'auto'} src="/logo_kddi.png" />
              </Grid.Column>
              <Grid.Column textAlign="end" style={{display:'flex' , justifyContent:'flex-end'}}>
                <Image  width={isMobile ? "61px" : 'auto'} src="/logo_speecys.png" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={3}>
              <Grid.Column style={{display:'flex' , justifyContent:'center'}}>
                <Image   width={isMobile ? "109px" : 'auto'}  src="/logo_rakuten.png" />
              </Grid.Column>
              <Grid.Column style={{display:'flex' , justifyContent:'center'}}>
                <Image  width={isMobile ? "94px" : 'auto'}  src="/logo_kanji.png" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          }
          </div>
          {isMobile &&
          <div style={{display:"flex" , marginTop:"46px", flexWrap:"wrap" , columnGap:"38px", justifyContent:"center" , rowGap:"35px"}}>
                <Image width={isMobile ? "83px" : 'auto'} src="/logo_softbank.png" />
                <Image  width={isMobile ? "83px" : 'auto'} src="/logo_kddi.png" />
                <Image  width={isMobile ? "61px" : 'auto'} src="/logo_speecys.png" />
                <Image   width={isMobile ? "109px" : 'auto'}  src="/logo_rakuten.png" />
                <Image  width={isMobile ? "94px" : 'auto'}  src="/logo_kanji.png" />
          </div>
          }
        </Segment>

        


          {!isMobile &&

            <div>
              <Divider hidden />
              <Divider hidden />
              <Divider hidden />
              <Divider hidden />
              <Divider hidden/>
              <Divider hidden/>
              <Divider hidden/>
              <Divider hidden/>
            </div>
          }
        

        <NextLevel />
      </>
  );
}



