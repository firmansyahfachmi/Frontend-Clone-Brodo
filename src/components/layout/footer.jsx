import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <Container className="mt-3 mb-3" style={{ marginTop: "4" }}>
          <Row className="pt-4">
            <Col md={2}>
              <a href="https://bro.do" class="testing">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/bucket-brodo/icon/logo-brodo-new-inactive.png"
                  alt="icon"
                  style={{
                    backgroundSize: "100px 33px !important",
                    width: "100px",
                    height: "41px !important"
                  }}
                />
              </a>
            </Col>
            <Col md={3}>
              <div class="title-brodo-footer-menu text-bold text-left brodo-full-100 display-block rel">
                <h5>Brodo FootwearBrodo Footwear</h5>

                <div
                  class="show-mobile icon-dropdown icon-dropdown-right abs btn-dropdown"
                  id="icon-brodo-footwear"
                >
                  <span class="rel icon-arrow icon-change-model-size"></span>
                </div>
              </div>
              <ul
                class="footer-menu-list"
                id="brodo-footwear"
                style={{ color: "white" }}
              >
                <li>
                  <a
                    className="cine"
                    href="https://bro.do/how-to-order"
                    style={{ textDecoration: "none" }}
                  >
                    Cara Pemesanan
                  </a>
                </li>
                <li>
                  <a
                    className="cine"
                    href="https://bro.do/confirmation-payment"
                    style={{ textDecoration: "none" }}
                  >
                    Konfirmasi Pembayaran
                  </a>
                </li>
                <li>
                  <a
                    className="cine"
                    href="https://bro.do/return-exchange/term"
                    style={{ textDecoration: "none" }}
                  >
                    Pengembalian &amp; Penukaran
                  </a>
                </li>
                <li>
                  <a
                    className="cine"
                    href="https://bro.do/faq"
                    style={{ textDecoration: "none" }}
                  >
                    Bantuan &amp; Saran
                  </a>
                </li>
                <li>
                  <a
                    className="cine"
                    href="https://bro.do/contact-us"
                    style={{ textDecoration: "none" }}
                  >
                    Hubungi Kami
                  </a>
                </li>
                <li>
                  <a
                    className="cine"
                    href="https://bro.do/testimonial"
                    style={{ textDecoration: "none" }}
                  >
                    Testimonial
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <div class="title-brodo-footer-menu text-bold text-left brodo-full-100 display-block rel">
                <h5>Legal</h5>
                <div
                  class="show-mobile icon-dropdown icon-dropdown-right abs btn-dropdown"
                  id="icon-legal"
                >
                  <span class="rel icon-arrow icon-change-model-size"></span>
                </div>
              </div>
              <ul class="footer-menu-list" id="legal">
                <li>
                  <a
                    className="cine"
                    href="https://bro.do/term-and-condition"
                    style={{ textDecoration: "none" }}
                  >
                    Aturan Penggunaan
                  </a>
                </li>
                <li>
                  <a
                    className="cine"
                    href="https://bro.do/privacy-policy"
                    style={{ textDecoration: "none" }}
                  >
                    Kebijakan Privasi
                  </a>
                </li>
              </ul>
              <div class="title-brodo-footer-menu text-bold text-left brodo-pull-left brodo-full-100 display-block rel">
                <h5>Lainnya</h5>
                <div
                  class="show-mobile icon-dropdown icon-dropdown-right abs btn-dropdown"
                  id="icon-other"
                >
                  <span
                    id="icon-other"
                    class="rel icon-arrow icon-change-model-size"
                  ></span>
                </div>
              </div>
              <ul class="footer-menu-list" id="other">
                <li>
                  <a
                    className="cine"
                    href="https://jurnal.bro.do"
                    style={{ textDecoration: "none" }}
                  >
                    Jurnal
                  </a>
                </li>
                <li>
                  <a
                    className="cine"
                    href="https://bro.do/videos"
                    style={{ textDecoration: "none" }}
                  >
                    Halaman Video
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <div class="title-brodo-footer-menu text-bold text-left brodo-full-100 display-block rel">
                <h5>Kontak Brodo</h5>
              </div>
              <ul class="footer-menu-not-list" style={{ fontSize: "14px" }}>
                <li>
                  <p>
                    Customer service kami dapat dihubungi 7 hari dalam seminggu,
                    hari kerja antara pkl. 08.00 - 21.00 &amp; akhir pekan pkl.
                    10.00 - 21.00.
                  </p>
                </li>
                <li>
                  <p>
                    <h5>Kontak Brodo</h5>
                    0811 854 5555<br></br>
                    0888 0808 5555
                  </p>
                  <p>Email: info@bro.do</p>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <i
                class="fa fa-instagram"
                style={{
                  fontSize: "35px",
                  marginRight: "10px"
                }}
              ></i>
              <i
                class="fa fa-facebook-square"
                style={{
                  fontSize: "35px",
                  marginRight: "10px"
                }}
              ></i>
              <i
                class="fa fa-youtube-play"
                style={{
                  fontSize: "35px",
                  marginRight: "10px"
                }}
              ></i>
              <i
                class="fa fa-twitter-square"
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
