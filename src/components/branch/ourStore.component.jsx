import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import "./ourStore.style.css";

const CardStore = (props) => {
  return (
    <Fragment>
      {console.log("print data", props.data)}
      <Container>
        <div className="head">
          <span>Halaman Utama</span>
          <h1>Toko Kami</h1>
          <br />
          <span>Kunjungi toko kami yang tersebar di kota-kota berikut</span>
        </div>

        {/* ////////////////// */}
        {props.data.map((data) => (
          <div className="page-blocks d-flex">
            <div className="image-block">
              <img style={{ maxWidth: 500 }} src={data.image} alt="toko"></img>
            </div>

            <div className="detail-block flex-column">
              <h6>{data.province.toUpperCase()}</h6>
              <h4>{data.name.toUpperCase()}</h4>
              <p>
                {data.address}
                <br />
                {data.telephone}{" "}
              </p>

              <p>Senin - Minggu: 10am - 9pm</p>

              <a href={data.maps} target="_blank" rel="noopener noreferrer">
                <button type="button" className="map">
                  LIHAT LOKASI
                </button>
              </a>
            </div>
          </div>
        ))}
      </Container>
    </Fragment>
  );
};

export default CardStore;
