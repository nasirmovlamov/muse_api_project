import { createMedia } from "@artsy/fresnel";
import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Divider,
  Form,
  Grid,
  Header,
  Message,
} from "semantic-ui-react";
import { useMediaQuery } from 'react-responsive'

const options = [
  { key: "analysis", text: "AI Analysis", value: "analysis" },
  { key: "chat", text: "Chat API", value: "chat" },
  { key: "measurement", text: "Measurement API", value: "measurement" },
  { key: "all", text: "ALL", value: "other" },
];

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});
export function TalkToSales(){
  const isMobile = useMediaQuery({query: '(max-width: 768px)'})

    return (
      <>
        <div vertical>
          <Header as="h1" textAlign="center" style={{ fontSize: isMobile?"28px" :"3em" , marginTop:isMobile?"40px" :"auto"  }}>
            Talk to a sales expert
            {!isMobile&& <Divider hidden/>}
            <Header.Subheader>
              아래 정보를 남겨주시면 담당자가 연락드리겠습니다.
            </Header.Subheader>
          </Header>

          {!isMobile&& <Divider hidden/>}
          {!isMobile&& <Divider hidden/>}
          

          <Grid stackable>
            <Grid.Row columns={3}>
              <Grid.Column></Grid.Column>
              <Grid.Column>
                <Form style={{width:isMobile ? "311px" :"482px" , margin:"auto"}}>
                  <Form.Field required>
                    <label>Name</label>
                    <input placeholder="Name" />
                  </Form.Field>
                  {isMobile&& <Divider hidden/>}
                  <Form.Field required>
                    <label>Email</label>
                    <input placeholder="email@company.com" />
                  </Form.Field>
                  {isMobile&& <Divider hidden/>}

                  <Form.Field required>
                    <label>Company</label>
                    <input placeholder="Company Name" />
                  </Form.Field>
                  {isMobile&& <Divider hidden/>}

                  <Form.Select
                    fluid
                    label="Interested Product"
                    options={options}
                    placeholder="Interested Product"
                  />
                  {isMobile&& <Divider hidden/>}

                  <Form.Field
                    label="Anything Else?"
                    placeholder="Tells us more about your project, needs and timeline"
                    control="textarea"
                    rows="5"
                  />
                  {isMobile&& <Divider hidden/>}

                  <Form.Field
                    label="Anything Else?"
                    placeholder="Tells us more about your project, needs and timeline"
                    control="textarea"
                    rows="5"
                  />
                  {isMobile&& <Divider hidden/>}
                  {isMobile&& <Divider hidden/>}

                  <Message style={{ backgroundColor: "white", color: "grey" }}>
                    AKA AI는 MUSE API 체험 서비스 제공을 위해 다음과 같이
                    개인정보를 수집 및 이용합니다. 개인정보의 수집 및 이용에
                    대한 동의를 거부하실 수 있으나, 이 경우 체험 서비스 제공이
                    어려울 수 있습니다.{" "}
                    <p>
                      1. 수집하는 개인정보 항목 : 이름, 휴대폰번호, 이메일주소,
                      기업명, 음성정보
                    </p>
                    <p>
                      {" "}
                      2. 개인정보의 수집 및 이용 목적 : 서비스 개선 및 성능향상,
                      광고성 정보 제공 등 프로모션
                    </p>
                    <p>
                      {" "}
                      3. 개인정보의 이용 및 보유기간 : 서비스 체험 내역 분석 및
                      통계, 사용자 연락을 위해 1년간 보관 후 파기
                    </p>
                  </Message>
                  {isMobile&& <Divider hidden/>}

                  <Form.Field>
                    <Checkbox label="I agree to the Terms and Conditions" />
                  </Form.Field>
                  {isMobile&& <Divider hidden/>}

                  <Button
                    style={{
                      width: isMobile ? "100%" :180,
                      height: isMobile ? "72px" :56,
                      fontSize: isMobile ? "20px" :"1.5em",
                      backgroundColor: "#F37021",
                      color: "#FFFFFF",
                    }}
                    floated="right"
                    type="submit"
                  >
                    Submit
                  </Button>
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                </Form>
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </>
    );
}
