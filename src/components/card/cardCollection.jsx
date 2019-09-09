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
      items: Array.from({ length: 9 })
    };
  }

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 9 }))
      });
    }, 1500);
  };

  render() {
    let data = this.props.products;

    // let abs = { ...data[1] }.name;

    // console.log("amin ", abs);
    return (
      <Fragment>
        <Row style={{ marginTop: 30, letterSpacing: 0 }}>
          <Col>
            Menampilkan {this.props.products.length} produk (
            <b>{this.props.products.length}</b> dari{" "}
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
          hasMore={true}
          loader={
            <div align="center">
              <Spinner animation="border" variant="primary" />
            </div>
          }
        >
          <Row style={{ marginTop: 40 }}>
            {this.state.items.map((a, index) => (
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
            ))}
          </Row>
          {/* {this.state.items.map((i, index) => (
              <Col key={index}>
                {this.props.products.length > 0 ? (
                  this.props.products.map(products => (
                    <Col md={4} style={{ marginBottom: 30 }} key={products.id}>
                      <Card className="cardCollection">
                        <Card.Img
                          variant="top"
                          src={products.image}
                          alt="Brodo x Rafheoo Backpack Black"
                        />
                        <Card.Body>
                          <Card.Title className="pb-1" style={{ fontSize: 15 }}>
                            {products.name}
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
                            Rp. <span>{products.price}</span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <Col className="p-3 border" style={{ textAlign: "center" }}>
                    <h1>No Data</h1>
                  </Col>
                )}
              </Col>
            ))}{" "} */}
        </InfiniteScroll>
        {/* </Row> */}
      </Fragment>
    );
  }
}

export default cardCollection;
