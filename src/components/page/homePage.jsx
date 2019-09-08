import React, { Fragment } from "react";

import Carousel from "../carousel/Carousel";
import Card from "../card/Card";

const homePage = () => {
  return (
    <Fragment>
      <Carousel type={"main"} />
      <Card type={"card"} />
      <Carousel type={"main1"} />
      <Card type={"card1"} />
    </Fragment>
  );
};

export default homePage;
