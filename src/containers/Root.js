import React from "react";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import { store } from "../store";
import authConfig from "../auth-config.json";

const Root = () => (
  <Auth0Provider
    domain={authConfig.auth0Domain}
    clientId={authConfig.auth0ClientID}
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);

export default Root;
