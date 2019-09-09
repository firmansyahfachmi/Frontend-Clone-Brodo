import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <Container className="pt-3" style={{ marginTop: "4" }}>
          <Row className="pt-4">
            <Col md={2}>
              <Link to="/" className="testing">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/bucket-brodo/icon/logo-brodo-new-inactive.png"
                  alt="icon"
                  style={{
                    backgroundSize: "100px 33px !important",
                    width: "100px",
                    height: "41px !important"
                  }}
                />
              </Link>
            </Col>
            <Col md={3}>
              <div className="title-brodo-footer-menu text-bold text-left brodo-full-100 display-block rel">
                <h5>BRODO FOOTWEAR</h5>

                <div
                  className="show-mobile icon-dropdown icon-dropdown-right abs btn-dropdown"
                  id="icon-brodo-footwear"
                >
                  <span className="rel icon-arrow icon-change-model-size"></span>
                </div>
              </div>
              <ul
                className="footer-menu-list"
                id="brodo-footwear"
                style={{ color: "white" }}
              >
                <li>
                  <Link
                    className="cine"
                    to={{ javascript: void 0 }}
                    style={{ textDecoration: "none" }}
                  >
                    Cara Pemesanan
                  </Link>
                </li>
                <li>
                  <Link
                    className="cine"
                    to={{ javascript: void 0 }}
                    style={{ textDecoration: "none" }}
                  >
                    Konfirmasi Pembayaran
                  </Link>
                </li>
                <li>
                  <Link
                    className="cine"
                    to={{ javascript: void 0 }}
                    style={{ textDecoration: "none" }}
                  >
                    Pengembalian &amp; Penukaran
                  </Link>
                </li>
                <li>
                  <Link
                    className="cine"
                    to={{ javascript: void 0 }}
                    style={{ textDecoration: "none" }}
                  >
                    Bantuan &amp; Saran
                  </Link>
                </li>
                <li>
                  <Link
                    className="cine"
                    to={{ javascript: void 0 }}
                    style={{ textDecoration: "none" }}
                  >
                    Hubungi Kami
                  </Link>
                </li>
                <li>
                  <Link
                    className="cine"
                    to={{ javascript: void 0 }}
                    style={{ textDecoration: "none" }}
                  >
                    Testimonial
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <div className="title-brodo-footer-menu text-bold text-left brodo-full-100 display-block rel">
                <h5>LEGAL</h5>
                <div
                  className="show-mobile icon-dropdown icon-dropdown-right abs btn-dropdown"
                  id="icon-legal"
                >
                  <span className="rel icon-arrow icon-change-model-size"></span>
                </div>
              </div>
              <ul className="footer-menu-list" id="legal">
                <li>
                  <Link
                    className="cine"
                    to={{ javascript: void 0 }}
                    style={{ textDecoration: "none" }}
                  >
                    Aturan Penggunaan
                  </Link>
                </li>
                <li>
                  <Link
                    className="cine"
                    to={{ javascript: void 0 }}
                    style={{ textDecoration: "none" }}
                  >
                    Kebijakan Privasi
                  </Link>
                </li>
              </ul>
              <div className="title-brodo-footer-menu text-bold text-left brodo-pull-left brodo-full-100 display-block rel">
                <h5>LAINNYA</h5>
                <div
                  className="show-mobile icon-dropdown icon-dropdown-right abs btn-dropdown"
                  id="icon-other"
                >
                  <span
                    id="icon-other"
                    className="rel icon-arrow icon-change-model-size"
                  ></span>
                </div>
              </div>
              <ul className="footer-menu-list" id="other">
                <li>
                  <Link
                    className="cine"
                    to={{ javascript: void 0 }}
                    style={{ textDecoration: "none" }}
                  >
                    Jurnal
                  </Link>
                </li>
                <li>
                  <Link
                    className="cine"
                    to={{ javascript: void 0 }}
                    style={{ textDecoration: "none" }}
                  >
                    Halaman Video
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <div className="title-brodo-footer-menu text-bold text-left brodo-full-100 display-block rel">
                <h5>KONTAK BRODO</h5>
              </div>
              <ul className="footer-menu-not-list" style={{ fontSize: "14px" }}>
                <li>
                  <p>
                    Customer service kami dapat dihubungi 7 hari dalam seminggu,
                    hari kerja antara pkl. 08.00 - 21.00 &amp; akhir pekan pkl.
                    10.00 - 21.00.
                  </p>
                </li>
                <li>
                  <p>
                    <span>
                      <b>Call Center</b>
                    </span>
                    <br></br>
                    0811 854 5555<br></br>
                    0888 0808 5555
                  </p>
                  <p>Email: info@bro.do</p>
                </li>
              </ul>
            </Col>
            <Col md={3} align="right">
              <i
                className="fa fa-instagram"
                style={{
                  fontSize: "35px",
                  marginRight: "10px"
                }}
              ></i>
              <i
                className="fa fa-facebook-square"
                style={{
                  fontSize: "35px",
                  marginRight: "10px"
                }}
              ></i>
              <i
                className="fa fa-youtube-play"
                style={{
                  fontSize: "35px",
                  marginRight: "10px"
                }}
              ></i>
              <i
                className="fa fa-twitter-square"
                style={{
                  fontSize: "35px",
                  marginRight: "10px"
                }}
              ></i>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Footer;
