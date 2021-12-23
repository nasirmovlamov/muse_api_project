import { createMedia } from "@artsy/fresnel";
import React from "react";
import { BrowserRouter as Router,  Switch,Route, useParams , useHistory , useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import { AIAnalysis } from "./layouts/AIAnalysis";
import { AIChat } from "./layouts/AIChat";
import { AIVision } from "./layouts/AIVision";
import { Home } from "./layouts/Home";
import { Pricing } from "./layouts/Pricing";
import { SolutionEducation } from "./layouts/SolutionEducation";
import { SolutionEnterprise } from "./layouts/SolutionEnterprise";
import { SolutionHealth } from "./layouts/SolutionHealth";
import { SolutionMobility } from "./layouts/SolutionMobility";
import { TalkToSales } from "./layouts/TalkToSales";
import "./assets/global/styles.css"
import { Topbar2 } from "./components/Topbar2";
import { Oxford } from "./layouts/Oxford";

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

export default function App() {
  const location = useLocation()
  return (
    <>
      {location.pathname === "/oxford" ? <Topbar2/> : <Topbar />}
      <div>
        <Switch>
          <Route
            exact
            path="/oxford"
            render={(props) => <Oxford {...props} />}
          />
          <Route
            exact
            path="/ai/analysis/"
            render={(props) => <AIAnalysis {...props} />}
          />
          <Route
            exact
            path="/ai/chat/"
            render={(props) => <AIChat {...props} />}
          />
          <Route
            exact
            path="/ai/vision/"
            render={(props) => <AIVision {...props} />}
          />

          <Route
            exact
            path="/solution/mobility/"
            render={(props) => <SolutionMobility {...props} />}
          />
          <Route
            exact
            path="/solution/enterprise/"
            render={(props) => <SolutionEnterprise {...props} />}
          />
          <Route
            exact
            path="/solution/education/"
            render={(props) => <SolutionEducation {...props} />}
          />
          <Route
            exact
            path="/solution/health/"
            render={(props) => <SolutionHealth {...props} />}
          />
          <Route
            exact
            path="/pricing/"
            render={(props) => <Pricing {...props} />}
          />
          <Route
            exact
            path="/sales/"
            render={(props) => <TalkToSales {...props} />}
          />
          <Route exact path="/" render={(props) => <Home {...props} />} />
        </Switch>
      </div>
      {location.pathname === "/oxford" ? "": <Footer />}
      
    </>
  );
}
