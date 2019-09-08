import React from "react";
import Footer from "./components/layout/footer";
import Card from "./components/card/Card";
// import Route from 'react-router-dom'

import Header from "./components/layout/header.jsx";
import Carousel from "./components/carousel/Carousel";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
// import Header from "./components/layout/header";

const App = () => {
  return (
    <Router>
      <Header />
      <Carousel type={"main"} />
      <Card type={"card"} />
      <Carousel type={"main1"} />
      <Card type={"card1"} />

      <Footer />
    </Router>
  );
};

export default App;
