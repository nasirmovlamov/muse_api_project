import { createMedia } from "@artsy/fresnel";
import React, { useEffect } from "react";
import { Button, Divider, Dropdown, Image, Menu } from "semantic-ui-react";

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

export default function Topbar() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  useEffect(() => {
  }, [])

  return (
    <MediaContextProvider>
      <Media lessThan="md">
        <div
          style={{
            zIndex: 1002,
            backgroundColor: "white",
            left: 0,
            top: 0,
            position: "fixed",
            width: "100%",
            height: 60,
            backgroundColor:( window.location.pathname === '/solution/education/' || window.location.pathname === '/solution/enterprise/' ) ?  "#FFEEE4" : "#FFFFFF" 

          }}
        >
          {!open && (
            <Image
              style={{ zIndex: 1000, position: "fixed", left: 32, top: 9 }}
              src="/akalogo.png"
              href="/"
            />
          )}
          {open && (
            <Image
              onClick={() => {
                setOpen(!open);
              }}
              style={{ zIndex: 1002, position: "fixed", left: 32, top: 20 }}
              src="/menu_icons_close.png"
            />
          )}
          {!open && (
            <Image
              onClick={() => {
                setOpen(!open);
              }}
              style={{ zIndex: 1000, position: "fixed", right: 32, top: 18 }}
              width="26"
              src="/hamburger.png"
            />
          )}
        </div>
        {open && (
          <div
            style={{
              opacity: 0.95,
              zIndex: 1001,
              backgroundColor: "white",
              left: 0,
              top: 0,
              position: "fixed",
              width: "100%",
              height: "100vh",
              paddingTop: 112,
              paddingLeft: 32,
            }}
          >
            <div
              style={{ paddingRight: 20 }}
              onClick={() => {
                setOpen1(!open1);
              }}
            >
              <span style={{ fontSize: 15, float: "left" }}>
                <b>MUSE API</b>
              </span>
              {open1 ? (
                <img
                  style={{ float: "right" }}
                  src="/menu_icons_arrow_up.png"
                />
              ) : (
                <img
                  style={{ float: "right" }}
                  src="/menu_icons_arrow_down.png"
                />
              )}
            </div>
            <br />
            {open1 && (
              <div style={{ padding: 20 }}>
                <p style={{ paddingTop: 20 }}>
                  <a style={{ color: "grey", fontSize: 15 }} href="/">
                    Muse API
                  </a>
                </p>
                <p style={{ paddingTop: 10 }}>
                  <a
                    style={{ color: "grey", fontSize: 15 }}
                    href="/ai/analysis/"
                  >
                    Muse AI Analysis API
                  </a>
                </p>
                <p style={{ paddingTop: 10 }}>
                  <a style={{ color: "grey", fontSize: 15 }} href="/ai/chat/">
                    Muse AI Chat API
                  </a>
                </p>
                <p style={{ paddingTop: 10 }}>
                  <a style={{ color: "grey", fontSize: 15 }} href="/ai/vision/">
                    Muse AI Vision API
                  </a>
                </p>
              </div>
            )}
            <Divider hidden />
            <Divider hidden />

            <div
              style={{ paddingRight: 20 }}
              onClick={() => {
                setOpen2(!open2);
              }}
            >
              <span style={{ fontSize: 15, float: "left" }}>
                <b>Solutions</b>
              </span>
              {open2 ? (
                <img
                  style={{ float: "right" }}
                  src="/menu_icons_arrow_up.png"
                />
              ) : (
                <img
                  style={{ float: "right" }}
                  src="/menu_icons_arrow_down.png"
                />
              )}{" "}
            </div>
            <br />
            {open2 && (
              <div style={{ padding: 20 }}>
                <p style={{ paddingTop: 20 }}>
                  <a
                    style={{ color: "grey", fontSize: 15 }}
                    href="/solution/education/"
                  >
                    Education
                  </a>
                </p>
                <p style={{ paddingTop: 10 }}>
                  <a
                    style={{ color: "grey", fontSize: 15 }}
                    href="/solution/enterprise/"
                  >
                    Enterprise
                  </a>
                </p>
                <p style={{ paddingTop: 10 }}>
                  <a
                    style={{ color: "grey", fontSize: 15 }}
                    href="/solution/health/"
                  >
                    Healthcare / Well Being
                  </a>
                </p>
                <p style={{ paddingTop: 10 }}>
                  <a
                    style={{ color: "grey", fontSize: 15 }}
                    href="/solution/mobility/"
                  >
                    Mobility
                  </a>
                </p>
              </div>
            )}
            <Divider hidden />
            <Divider hidden />

            <span style={{ fontSize: 15, float: "left" }}>
              <b>Pricing</b>
            </span>
            <br />

            <Divider hidden />
            <Divider hidden />
            <span style={{ fontSize: 15, float: "left" }}>
              <b style={{display:'flex'}}> Company  <div style={{width:'10px'}}></div> ↗</b>
            </span>
            <br />
          </div>
        )}
        <div style={{ height: 60 }}></div>
      </Media>
      <Media greaterThanOrEqual="md">
        <Menu
          borderless
          style={{ padding: 20, backgroundColor:( window.location.pathname === '/solution/education/' || window.location.pathname === '/solution/enterprise/' ) ?  "#FFEEE4" : "#FFFFFF" }}
          fluid
          secondary
          fixed="top"
          stackable
        >
          <Menu.Item name="logo">
            <Image src="/akalogo.png" href="/" />
          </Menu.Item>
          <Dropdown item text="Muse API">
            <Dropdown.Menu
              style={{
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
                borderTop: "solid #f37021 3px",
                borderRadius: 0,
              }}
            >
              <Dropdown.Item href="/">Muse API</Dropdown.Item>
              <Dropdown.Item href="/ai/analysis/">
                Muse AI Analysis API
              </Dropdown.Item>
              <Dropdown.Item href="/ai/chat/">Muse AI Chat API</Dropdown.Item>
              <Dropdown.Item href="/ai/vision/">
                Muse AI Vision API
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="Solutions">
            <Dropdown.Menu
              style={{
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
                borderTop: "solid #f37021 3px",
                borderRadius: 0,
              }}
            >
              <Dropdown.Item href="/solution/education/">
                Education
              </Dropdown.Item>
              <Dropdown.Item href="/solution/enterprise/">
                Enterprise
              </Dropdown.Item>
              <Dropdown.Item href="/solution/health/">
                Healthcare / Well Being
              </Dropdown.Item>
              <Dropdown.Item href="/solution/mobility/">Mobility</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item name="Muse API" href="/pricing/">
            Pricing
          </Menu.Item>
          <Menu.Item name="Muse API" href="https://www.akaintelligence.com/">
            Company
          </Menu.Item>

          <Menu.Item position="right" name="maps">
            <Button color="orange" href="/sales/">
              Talk to sales
            </Button>
          </Menu.Item>
        </Menu>
        <div style={{ height: 110 }}></div>
      </Media>
    </MediaContextProvider>
  );
}
