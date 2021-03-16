import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import Loader from "./Loader";
import LoaderContainer from "./LoaderContainer";

const PrivateRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ),
    })}
    {...args}
  />
);

export default PrivateRoute;
