import React, { Fragment, Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  OverlayTrigger,
  Tooltip,
  Card,
  ToggleButtonGroup,
  ToggleButton,
  ButtonToolbar
} from "react-bootstrap";

class detailBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whisClass: "fa fa-heart-o"
    };
  }
  render() {
    return (
      <Fragment>
        <div className="pt-5" style={{ background: "#e4e4e4" }}>
          <Container className="mt-4">
            {this.props.detailProducts.map(detail => (
              <Row>
                <Col className="p-4" md={5}>
                  <div>
                    <img
                      src={detail.image}
                      alt=""
                      style={{ width: "600px", height: "600px" }}
                    ></img>
                  </div>
                </Col>
                <Col className="p-4" md={2}></Col>
                <Col className="p-4" md={5}>
                  <h3>{detail.name}</h3>
                  <span className="product-price">Rp. {detail.price}</span>
                  <Form>
                    <Form.Group>
                      <ButtonToolbar
                        style={{ float: "right", marginBottom: "20px" }}
                      >
                        <ToggleButtonGroup type="checkbox">
                          <ToggleButton
                            variant="light"
                            size="lg"
                            value={1}
                            style={{ textAlignLast: "right" }}
                            onChange={() => {
                              if (this.state.whisClass === "fa fa-heart") {
                                this.setState({ whisClass: "fa fa-heart-o" });
                              } else {
                                this.setState({ whisClass: "fa fa-heart" });
                              }
                            }}
                          >
                            
                           Add to Wishlist &nbsp;
                            <i
                              className={this.state.whisClass}
                              style={{ color: "red" }}
                            ></i>
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </ButtonToolbar>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1" multiple>
                      <Form.Control
                        as="select"
                        style={{ border: "1px solid", textAlignLast: "center" }}
                      >
                        <option selected disabled>
                          PILIH UKURAN
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Button
                        style={{
                          background: "#0b3f57",
                          border: "#0b3f57",
                          width: "100%"
                        }}
                      >
                        TAMBAH KE KERANJANG
                      </Button>
                    </Form.Group>
                  </Form>
                  <div className="pt-2">
                    <span>
                      <b>
                        Perkiraan Ongkos Kirim&nbsp;
                        <OverlayTrigger
                          key={"top"}
                          placement={"top"}
                          overlay={
                            <Tooltip>
                              <strong>
                                Ongkos kirim dibebankan kepada Pembeli
                              </strong>
                              .
                            </Tooltip>
                          }
                        >
                          <icon className="fa fa-info-circle"></icon>
                        </OverlayTrigger>
                      </b>
                    </span>
                  </div>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlSelect2" multiple>
                      <Form.Control
                        as="select"
                        type="text"
                        style={{
                          border: "1px solid",
                          marginTop: "5px",
                          textAlignLast: "center"
                        }}
                      >
                        <option selected disabled>
                          PILIH KOTA
                        </option>
                        <option>Malang</option>
                        <option>Surabaya</option>
                        <option>DI Yogyakarta</option>
                        <option>Jakarta</option>
                        <option>Bandung</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                  <h3>
                    <span className="text-bold">Deskripsi</span>
                    <div className="mt-2"></div>
                    <span className="span-tiny">Produk</span>
                    <div className="span-grid"></div>
                  </h3>
                  <div className="mt-4"></div>
                  <Card>
                    <Card.Body className="card-body">
                      <p>{detail.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))}
          </Container>
        </div>
      </Fragment>
    );
  }
}
        
export default detailBar;
