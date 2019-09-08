import React, {Fragment} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
   
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer";
import HomePage from "./components/page/homePage";
import Collection from "./components/page/collection.jsx";

import "./App.css";

const App = () => {
  return (
    <Router>
      
      <Route
        path="/"
        exact
        render={() => {
          return (
            <Fragment>
              <Header />
              <HomePage />
            </Fragment>
          );
        }}
      />
      <Route path="/collection"
          exact
          render={() => {
            return(
              <Fragment>
                <Header headType="white"/>
                <Collection/>
              </Fragment>
            )
          }}
        />
      <Footer />
    </Router>
  );
};

export default App;
