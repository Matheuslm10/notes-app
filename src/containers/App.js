import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Loading from "../components/Loading";
import PrivateRoute from "../components/PrivateRoute";
import Home from "../pages/Home";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
