import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView
} from "mdbreact";
import { Card } from "react-bootstrap";

const CarouselBar = props => {
  const type = props.type;
  switch (type) {
    case "main":
      return (
        <MDBCarousel
          style={{ height: 550 }}
          activeItem={1}
          length={2}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="//cdn.shopify.com/s/files/1/0256/2398/6281/files/BRD_2263_1_3024x.jpg?v=1571407391 3024w"
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="//cdn.shopify.com/s/files/1/0256/2398/6281/files/BRD_2404_ok_1_-min_3024x.jpg"
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      );
    case "main1":
      return (
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={false}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <Card style={{ background: "#003142" }}>
                  <Card.Body
                    align="center"
                    className="swiper-quotes"
                    // style={{ color: "white" }}
                  >
                    <div className="center" align="center">
                      "Mimpi kita agar brand Made in Indonesia bisa berjaya di
                      negeri sendiri."
                    </div>
                  </Card.Body>
                </Card>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <Card style={{ background: "#003142" }}>
                  <Card.Body
                    align="center"
                    className="swiper-quotes"
                    // style={{ color: "white" }}
                  >
                    <div className="center" align="center">
                      "Mengembangkan produk lokal"
                    </div>
                  </Card.Body>
                </Card>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <Card style={{ background: "#003142" }}>
                  <Card.Body
                    align="center"
                    className="swiper-quotes"
                    // style={{ color: "white" }}
                  >
                    <div className="center" align="center">
                      "Kita tidak hanya membangun brand, tetapi sebuah
                      komunitas, sebuah pergerakan untuk teman teman yang
                      mengejar hidup lebih epic."
                    </div>
                  </Card.Body>
                </Card>
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      );
    default:
      return <h1>RIP</h1>;
  }
};

export default CarouselBar;
