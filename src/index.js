import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
//import { ConnectedRouter } from "react-router-redux";
import { createBrowserHistory } from "history";
import "semantic-ui-css/semantic.min.css";
import createAppStore from "./store";
import "./index.css";

const history = createBrowserHistory();
const store = createAppStore({}, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
