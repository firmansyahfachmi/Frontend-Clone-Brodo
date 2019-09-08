import React from "react";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header.jsx";
import HomePage from "./components/page/homePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
      <Footer />
    </Router>
  );
};

export default App;
