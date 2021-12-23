import { createMedia } from "@artsy/fresnel";
import React, { Component } from "react";
import { Button, Card, Divider, Header, Image, List } from "semantic-ui-react";
import NextLevel from "../components/NextLevel";
import "../assets/global/components/pricingPage.css"
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


export function Pricing() {
  const isMobile = useMediaQuery({query: '(max-width: 768px)'})

    return (
      <>
        <div style={{ padding: isMobile? "1em" : "4em" }} vertical>
          <Header as="h1" textAlign="center" style={{ fontSize: "3em" }}>
            Pricing
            <Header.Subheader>
              Please select your plan to start Muse API
            </Header.Subheader>
          </Header>
          <Divider hidden />

          <div className="cardsCont">



            <div className='pricingCard' color="orange">
                <div className="cardTopOrangeLine"></div>
                <h4 className='pricingCardHeader'>개별 구매 </h4>
                <br />
                <Card.Meta>API당</Card.Meta>
                <br />
              

                <Card.Description>
                  <Header as="h1" style={{ fontSize: "3em"}}>
                    $7
                  </Header>
                </Card.Description>
                <hr className='cardLine'/>
                <br />
                <p className='cardText'>
                  {" "}
                  <p>함께 API를 사용하여 서비스하는 경우 리테일 가격의 50%</p>
                  <br/>
                  A royalty of 50% of the net receipts of each licensed product
                  or USD7 per user purchasing access, whichever is the greater,
                  payable
                </p>

                <div style={{marginTop:"36px" , width:"100%" , height:"54"}}>
                  <Button  className="pricingButton" href="/ai/chat/" fluid color="orange" inverted>
                    <div className="pricingButtonDiv">
                      Start a free trial
                    </div>
                  </Button>
                </div>
            </div>




            <div className='pricingCard' color="orange">
              <div className="cardTopOrangeLine"></div>


                <div>
                  <h4 className='pricingCardHeader'>Package 구매 </h4>
                  <ul className='pricingCardList'>
                      <li>English Education API Package</li>
                      <li>
                        Digital Remedy API (Cognitive impairment) Package
                      </li>
                      <li>
                        Driving Companion API Package for the future connected car
                      </li>
                      <li>Smart farming API package</li>
                  </ul>
                </div>

                <hr className='cardLine2'/>



                <div style={{display:"flex" , flexDirection:"column" , marginTop:"12px"}}>
                  <Header as="h1" style={{color:'black'}} style={{margin:"0px" , color:"black"}}>Contact us</Header>
                  <br />
                  가격과 구성에 대한 사항은 문의를 주시기 바랍니다.
                </div>



                <div className='pricingButtonDiv' style={{marginTop:isMobile ? "20px" :"65px" , width:"100%"}}>
                  <Button  className="pricingButton " href="/sales/" fluid color="orange">
                    <div className="pricingButtonDiv">
                      Talk to Sales
                      </div>
                  </Button>
                </div>
                <div>
                  
                </div>
            </div>




          </div>
        </div>{" "}


        <Divider hidden />
        <Divider hidden />


        <div style={{ padding: isMobile ? "40px 32px" : "80px 80px", width:"100%", boxSizing:"border-box", backgroundColor: "#ffeee4" , display:'flex' ,flexDirection:"column" , alignItems:"center"}} vertical>
          <Header as="h1" textAlign="center" style={{ fontSize: "3em" }}>
            Education API Package
          </Header>
          <Divider hidden />
          <Divider hidden />
          <div style={{margin:"auto" , display:"flex" , columnGap:"48px" , flexWrap:"wrap" ,   rowGap:"20px",}}>
            <div className='eduApiSectionCard' style={{ width: isMobile ? "100%" :400, boxSizing:"border-box" , height:isMobile ? "auto" : "321px"  }}>
                <h4 className='eduApiCardHeader'>Chat API </h4>
                <hr className='eduApiCardLine'/> 
                <ul className="eduApiSectionList">
                  <li>
                    <Image avatar src="/check.png" />
                    <List.Content>Learner's Mode</List.Content>
                  </li>
                  <li>
                    <Image avatar src="/check.png" />
                    <List.Content>Chat Log API</List.Content>
                  </li>
                  <li>
                    <Image avatar src="/check.png" />
                    <List.Content>
                      Analysis API (Learner's Chat 분석 포함)
                    </List.Content>
                  </li>
                  <li>
                    <Image avatar src="/check.png" />
                    <List.Content>Easy Mode (Muse Free Talk)</List.Content>
                  </li>
                </ul>
            </div>



            <div className='eduApiSectionCard' style={{  width: isMobile ? "100%" :400, boxSizing:"border-box" ,height:isMobile ? "auto" : "321px" }}>
                <h4 className='eduApiCardHeader'>Corpus API </h4>
                <hr className='eduApiCardLine'/> 
                <ul className="eduApiSectionList">
                  <li>
                    <Image avatar src="/check.png" />
                    <List.Content>User List</List.Content>
                  </li>
                  <li>
                    <Image avatar src="/check.png" />
                    <List.Content>Tree List</List.Content>
                  </li>
                  <li>
                    <Image avatar src="/check.png" />
                    <List.Content>
                      User Progress
                    </List.Content>
                  </li>
                  
                </ul>
            </div>


          </div>
        </div>{" "}
        <NextLevel />
      </>
    );
}
