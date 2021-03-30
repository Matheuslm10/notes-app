import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import CentralizedLoader from "./CentralizedLoader";

const PrivateRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <CentralizedLoader />,
    })}
    {...args}
  />
);

export default PrivateRoute;
