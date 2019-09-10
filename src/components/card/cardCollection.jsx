import React, { Component, Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Card,
  Col,
  Row,
  ButtonGroup,
  Button,
  Form,
  Spinner
} from "react-bootstrap";

class cardCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Array.from({ length: 6 }),
      hasMore: true,
      length: props.products
    };
  }

  fetchMoreData = () => {
    if (this.state.items.length >= this.props.products.length) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 1 }))
      });
    }, 200);
  };

  render() {
    const data = this.props.products;

    console.log("state", this.state.items);
    return (
      <Fragment>
        <div id="upper"></div>
        <Row style={{ marginTop: 30, letterSpacing: 0 }}>
          <Col>
            Menampilkan {this.state.items.length} produk (
            <b>{this.state.items.length}</b> dari{" "}
            <b>{this.props.products.length}</b>)
          </Col>
        </Row>

        <Row>
          <Col>
            <ButtonGroup className="mt-3">
              <Button variant="light" active>
                <i className="fa fa-th-large"></i>
              </Button>
              <Button variant="light" className="border-left">
                <i className="fa fa-th-list"></i>
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={4}>
            <Form.Row>
              <Col>
                <Form.Control as="select">
                  <option>Urutkan</option>
                  <option>Produk Terbaru</option>
                  <option>Produk Terlama</option>
                  <option>Nama (A-Z)</option>
                  <option>Nama (Z-A)</option>
                </Form.Control>
              </Col>
              <Col>
                <Button
                  variant="light"
                  style={{ padding: 0 }}
                  className="border"
                >
                  <span className="p-2">Filter Berdasarkan</span>
                  <span
                    className="fa fa-angle-down bg-primary pt-2 pb-2 pl-3 pr-3"
                    style={{ color: "white", fontWeight: "bold" }}
                  ></span>
                </Button>
              </Col>
            </Form.Row>
          </Col>
        </Row>

        {/* <Row style={{ marginTop: 40 }}> */}
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={
            <div style={{ textAlign: "center" }}>
              <Spinner animation="border" variant="primary" />
            </div>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <a
                href="#upper"
                style={{ color: "white" }}
                className=" btn btn-primary "
              >
                <i className="fa fa-angle-up"></i>
              </a>
            </p>
          }
          style={{ overflow: "hidden" }}
        >
          <Row style={{ marginTop: 40 }}>
            {this.props.products.length > 0 ? (
              this.state.items.map((a, index) => (
                <Col md={4} style={{ marginBottom: 30 }} key={index}>
                  {/* <h2>nge - map index ke {{ ...data[index] }.name}</h2> */}
                  <Card className="cardCollection">
                    <Card.Img
                      variant="top"
                      src={{ ...data[index] }.image}
                      alt="Brodo x Rafheoo Backpack Black"
                    />
                    <Card.Body>
                      <Card.Title className="pb-1" style={{ fontSize: 15 }}>
                        {{ ...data[index] }.name}
                      </Card.Title>
                      <Card.Text
                        className="border-top pt-2"
                        style={{
                          color: "#e06100",
                          fontWeight: "600",
                          fontSize: 18
                        }}
                      >
                        {}
                        Rp. <span>{{ ...data[index] }.price}</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col md={4} style={{ marginBottom: 30 }}></Col>
            )}
          </Row>
        </InfiniteScroll>
      </Fragment>
    );
  }
}

export default cardCollection;
