import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router,  Switch,Route, useParams , useHistory , useLocation } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import "react-alice-carousel/lib/alice-carousel.css";
import { LanguageProvider } from "./context/LanguageContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageProvider>
        <Router>
          <App />
        </Router>
      </LanguageProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
