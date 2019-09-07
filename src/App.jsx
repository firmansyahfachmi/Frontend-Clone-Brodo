import Footer from "./components/layout/footer";
import Card from "./components/layout/Card";

import React, {Fragment} from "react";
// import Route from 'react-router-dom'

import Header from './components/layout/header.jsx'

import "./App.css";
// import Header from "./components/layout/header";

const App = () => {

  return (

    <Fragment>
      <Header/>
      <Card />
      <Footer />
    </Fragment>

  );
};

export default App;
