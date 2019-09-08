import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
   
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer";
import HomePage from "./components/page/homePage";
import Collection from "./components/page/collection.jsx";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Route
        path="/"
        exact
        render={() => {
          return <HomePage />;
        }}
      />
      <Route path="/collection"
          exact
          render={() => {
            return <Collection/>
          }}
        />
      <Footer />
    </Router>
  );
};

export default App;
