import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer";
import HomePage from "./components/page/homePage";
import Collection from "./components/page/collection.jsx";
import Wishlist from "./components/page/wishlist.jsx";
import Detail from "./components/page/detail.jsx";
import AboutUs from "./components/page/aboutus.jsx";
import Checkout from "./components/page/checkout.jsx";
import OurStore from "./components/page/ourStore.page.jsx";

import store from "./Publics/Redux/store.js";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route
          path="/"
          exact
          render={props => {
            return (
              <Fragment>
                <Header history={props.history} key={window.location.search} />
                <HomePage />
              </Fragment>
            );
          }}
        />
        <Route
          path="/collection/:status"
          render={props => {
            return (
              <Fragment>
                <Header
                  headType="white"
                  history={props.history}
                  key={window.location.search}
                />
                <Collection {...props} />
              </Fragment>
            );
          }}
        />
        <Route
          path="/product/:name"
          render={props => {
            return (
              <Fragment>
                <Header
                  headType="white"
                  history={props.history}
                  key={window.location.search}
                />
                <Detail {...props} />
              </Fragment>
            );
          }}
        />

        <Route
          path="/pages/about-us"
          render={props => {
            return (
              <Fragment>
                <Header
                  headType="white"
                  history={props.history}
                  key={window.location.search}
                />
                <AboutUs {...props} />
              </Fragment>
            );
          }}
        />

        <Route
          path="/wishlist/:status"
          render={props => {
            return (
              <Fragment>
                <Header
                  headType="white"
                  history={props.history}
                  key={window.location.search}
                />
                <Wishlist {...props} />
              </Fragment>
            );
          }}
        />

        <Route
          path="/pages/our-store"
          render={props => {
            return (
              <Fragment>
                <Header
                  headType="white"
                  history={props.history}
                  key={window.location.search}
                />
                <OurStore {...props} />
              </Fragment>
            );
          }}
        />

        <Route
          path="/checkout"
          exact
          render={props => {
            return (
              <Fragment>
                <Header
                  headType="white"
                  history={props.history}
                  key={window.location.search}
                />
                <Checkout {...props} />
              </Fragment>
            );
          }}
        />
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
