import React, { Fragment } from "react";
import { CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const cardBar = props => {
  const type = props.type;
  switch (type) {
    case "card":
      return (
        <Fragment>
          <div className="pl-3 pr-3">
            <CardDeck style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <Card>
                <Link to="/home">
                  <Card.Img
                    variant="top"
                    src="https://s3-ap-southeast-1.amazonaws.com/images.bro.do/media/333-ez-big-banner.jpg"
                  />
                </Link>
              </Card>
              <Card>
                <Link to="/home">
                  <Card.Img
                    variant="top"
                    src="https://s3-ap-southeast-1.amazonaws.com/images.bro.do/media/793-brodotimekaaeepr.jpg"
                  />
                </Link>
              </Card>
            </CardDeck>
          </div>
        </Fragment>
      );
    case "card1":
      return (
        <Fragment>
          <div className="pl-3 pr-3">
            <CardDeck style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <Card>
                <Link to="/home">
                  <Card.Img
                    variant="top"
                    src="https://s3-ap-southeast-1.amazonaws.com/images.bro.do/media/490-signore-low-series-banner-kecil.jpg"
                  />
                </Link>
              </Card>
              <Card>
                <Link to="/home">
                  <Card.Img
                    variant="top"
                    src="https://s3-ap-southeast-1.amazonaws.com/images.bro.do/media/373-raijin-fujin.jpg"
                  />
                </Link>
              </Card>
              <Card>
                <Link to="/home">
                  <Card.Img
                    variant="top"
                    src="https://s3-ap-southeast-1.amazonaws.com/images.bro.do/media/760-boots-banner-kecil.jpg"
                  />
                </Link>
              </Card>
            </CardDeck>
          </div>
        </Fragment>
      );
    default:
      return <h1>Page Not found</h1>;
  }
};

export default cardBar;
