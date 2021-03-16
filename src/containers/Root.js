import React from "react";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import { store } from "../store";

const Root = () => (
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);

export default Root;
