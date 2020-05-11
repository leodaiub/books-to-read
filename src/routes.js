import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ModalContainer } from "react-router-modal";
import "react-router-modal/css/react-router-modal.css";
import Layout from "./components/Layout";
import { isAuthenticated } from "./services/auth";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import App from "./pages/App.js";
import BooksStatus from "./pages/BooksStatus";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Layout>
        <PrivateRoute path="/app" component={App} />
        <PrivateRoute path="/books-status" component={BooksStatus} />
        {/* <Route path="*" component={() => <h1>Page not found</h1>} /> */}
      </Layout>
    </Switch>

    <ModalContainer />
  </BrowserRouter>
);

export default Routes;
