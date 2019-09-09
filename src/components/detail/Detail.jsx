import React, { Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  OverlayTrigger,
  Tooltip,
  Card
} from "react-bootstrap";
const detailBar = () => {
  return (
    <Fragment>
      <div className="pt-5" style={{ background: "#e4e4e4" }}>
        <Container className="mt-4">
          <Row>
            <Col className="p-4" md={5}>
              <div>
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/images.bro.do/media/870-1-ok-1.jpg"
                  alt=""
                  style={{ width: "600px", height: "600px" }}
                ></img>
              </div>
            </Col>
            <Col className="p-4" md={2}></Col>
            <Col className="p-4" md={5}>
              <h3>Bros Slide Full Green</h3>
              <span className="product-price">Rp 195.000</span>
              <Form>
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
                <Form.Group controlId="exampleForm.ControlSelect1" multiple>
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
                  <p>
                    <strong>
                      <ins>BRODO Independence Day Pack</ins>
                    </strong>
                    <br />
                    Koleksi spesial bentuk perjuangan kami dalam wujud karya
                    untuk hari kemerdekaan Indonesia ke-74.Kami ingin setiap
                    orang yang memakainya bangga sebagai bangsa Indonesia dan
                    menyiarkan karya-karya anak bangsa ke pelosok negeri dan
                    dunia.
                  </p>
                  <p>
                    Pake sendal pun bisa jadi cara menunjukan cinta dan
                    apresiasi kita buat negri ini. Broslides Independence Day
                    special edition warna merah dan putih yang melambangkan
                    bendera Indonesia ini adalah salah satu pilihannya. Kenapa
                    cowo harus malu-malu pake warna merah? Wear it proud
                    brothers! Di rumah, di lapangan bola, atau ke musholla. -
                    Synthetic Waterproof Upper - Super Comfort Phylon Outsole
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default detailBar;
