import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import "./checkout.style.css";

import { getCart } from "../../Publics/Redux/Action/cart";

export class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "Tondano White Red",
          price: 499000,
          image:
            "https://cdn.shopify.com/s/files/1/0256/2398/6281/products/1_o_1800x1800.jpg?v=1567758055"
        },
        {
          id: 2,
          name: "Tondano Fox White",
          price: 499000,
          image:
            "https://cdn.shopify.com/s/files/1/0256/2398/6281/products/1_o_1800x1800.jpg?v=1567758055"
        }
      ],
      dataCart: []
    };
  }

  ///////////////////////////////////////
  componentDidMount = async () => {
    await this.props.dispatch(getCart()).then((res) => {
      this.setState({
        dataCart: this.props.cart
      });
    });
  };

  /////////////////////////////

  render() {
    const data = this.state.dataCart;

    return (
      <Fragment>
        <p>asd</p>
        {console.log(data)}
        <p style={{ marginTop: "60px" }}></p>
        <div className="pContainer">
          <div className="bodyDiv">
            <div className="divHead pHead mb-2">
              <p className="pHead">
                <Row>
                  <div class="numberCircle">1</div> Data Diri
                </Row>
              </p>
            </div>
            <div className="bodyText scroll content">
              <p>Masukkan data alamat tujuan untuk pengiriman barang</p>
              <input
                type="email"
                className="form-control mb-3 "
                placeholder="Email"
              />
              <input
                className="form-control mb-3 mt-3"
                placeholder="Atasnama"
              />
              <div style={{ border: "solid grey 2px" }}>
                <p>Alamat Tidak Tersedia</p>
                <hr />
                <p>Tambahkan Alamat Baru Bro-Sis</p>
              </div>
              <input class="form-control  mb-3 mt-3" placeholder="Nomor HP" />
              <textarea
                class="form-control rounded-0"
                id="exampleFormControlTextarea2"
                rows="3"
                placeholder="Informasi tambahan/catatan"
              ></textarea>
            </div>

            <div className="dBottom">
              <p className="pHead">Lanjut ke Pengiriman </p>
            </div>
          </div>

          <div className="bodyDiv ">
            <div className="divHead mb-2">
              <p className="pHead">
                <Row>
                  {" "}
                  <div class="numberCircle">2</div>Pengiriman{" "}
                </Row>
              </p>
            </div>
            <div className="scroll content">
              <table
                style={{
                  width: "90%",
                  margin: "auto",
                  borderLeft: "20px solid grey"
                }}
              >
                <tr>
                  <td style={{ width: "50%" }}>Kurir</td>
                  <td>Estimasi Biaya Pengiriman</td>
                </tr>
                <tr>
                  <td colspan="2">Biaya Pengiriman</td>
                </tr>
              </table>{" "}
              <br />
              <div className="divHead">
                <p className="pHead">
                  <Row>
                    {" "}
                    <div class="numberCircle">3</div> Pembayaran{" "}
                  </Row>
                </p>
              </div>
              <div className="bodyText">
                <div>
                  <p className="pBlue">
                    Transfer Virtual Account (Verifikasi Otomatis)
                  </p>
                  <span>
                    Pembayaran diproses otomatis, jadi Bro/sis tidak perlu
                    melakukan konfirmasi pembayaran dan mencatumkan bukti
                    transfer.
                  </span>
                </div>
                <hr />
                <div>
                  <p className="pBlue">Bank Transfer</p>
                  <span>
                    Pembayaran diproses maksimal <b>1x24</b> jam, setelah
                    Bro/sis melakukan konfirmasi pembayaran dan mengirimkan
                    bukti transfer.
                  </span>
                </div>
                <hr />
                <div>
                  <p className="pBlue">e-Wallet</p>
                  <span>
                    Pembayaran diproses otomatis, jadi Bro/sis tidak perlu
                    melakukan konfirmasi pembayaran dan mencatumkan bukti
                    transfer.
                  </span>
                </div>
                <hr />
                <div>
                  <p className="pBlue">Cicilan Tanpa Kartu</p>
                  <span>
                    Pembayaran menggunakan cicilan dengan syarat dan ketentuan
                    berlaku.
                  </span>
                </div>
              </div>
            </div>
            <div className="dBottom dBorder">
              <p className="pHead">Selanjutnya </p>
            </div>
          </div>

          <div className="bodyDiv">
            <div className="divHead mb-2">
              <p className="pHead">
                <Row>
                  <div class="numberCircle">4</div> Detail Pesanan{" "}
                </Row>
              </p>
            </div>

            <div className="bodyText scroll content">
              <div
                style={{ width: "90%", margin: "auto" }}
                class="input-group mb-3"
              >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Kode Kupon"
                />
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2">
                    GUNAKAN
                  </span>
                </div>
              </div>
              {/* ------------------------Get Cart--------------------------------------------------------------- */}
              {data.map((data) => (
                <div className="Cart">
                  <Row>
                    <Col className="col-sm-3">
                      <img
                        src={data.image}
                        alt={data.name}
                        style={{
                          width: 70,
                          marginBottom: "15px",
                          marginLeft: "20px"
                        }}
                      />
                    </Col>
                    <Col className="col-sm-9">
                      <Row style={{ marginBottom: 2 }}>
                        <Col>
                          <strong>{data.name}</strong>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ fontSize: 14 }}>Rp. {data.price}</Col>
                      </Row>
                      <Row>
                        <Col style={{ fontSize: 14 }}>Jumlah : 3</Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              ))}

              {/* ------------------------Get Cart--------------------------------------------------------------- */}

              <table style={{ width: "90%", margin: "auto" }}>
                <tr>
                  <td style={{ padding: "10px" }}>Total Belanja</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px" }}>Total Diskon</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px" }}>Ongkos Kirim</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px" }}>Total Dibayar</td>
                </tr>
              </table>
            </div>

            <div className="dBottom">
              <p className="pHead">Bayar </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.addedCart
  };
};
export default connect(mapStateToProps)(Checkout);
