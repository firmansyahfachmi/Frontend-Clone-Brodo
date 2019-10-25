import React, { Fragment } from "react";
import { CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const cardBar = props => {
  const type = props.type;

  const styles = {
    card1: {
      objectFit: "cover",
      height: 300
    },
    card2: {
      objectFit: "cover",
      height: 250
    }
  };
  switch (type) {
    case "card":
      return (
        <Fragment>
          <div className="pl-3 pr-3">
            <CardDeck style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <Card>
                <Link to="/collection/signature">
                  <Card.Img
                    style={styles.card1}
                    variant="top"
                    src="//cdn.shopify.com/s/files/1/0256/2398/6281/files/BRD_0966_1_-min_3024x.jpg"
                  />
                </Link>
              </Card>
              <Card>
                <Link to="/collection/watch">
                  <Card.Img
                    style={styles.card1}
                    variant="top"
                    src="
                    //cdn.shopify.com/s/files/1/0256/2398/6281/collections/BRD_1879_1728x.jpg"
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
                <Link to="/collection/signature">
                  <Card.Img
                    style={styles.card2}
                    variant="top"
                    src="//cdn.shopify.com/s/files/1/0256/2398/6281/files/BRD_0123_3024x.JPG"
                  />
                </Link>
              </Card>
              <Card>
                <Link to="">
                  <Card.Img
                    style={styles.card2}
                    variant="top"
                    src="//cdn.shopify.com/s/files/1/0256/2398/6281/files/DSC09402_ok_3024x.jpg"
                  />
                </Link>
              </Card>
              <Card>
                <Link to="/collection/boots">
                  <Card.Img
                    style={styles.card2}
                    variant="top"
                    src="
                    //cdn.shopify.com/s/files/1/0256/2398/6281/collections/BRD_9924_1728x.jpg"
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
