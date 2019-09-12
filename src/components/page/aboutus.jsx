import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const pStyle = {
    fontSize: "15px",
    marginTop: "30px"
  };
  const pContainer = {
    color: "#1d4458",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "70%"
  };
  const sImage = {
    maxWidth: "100%",
    marginTop: "50px"
  };
  const sHead = {
    padding: "200px 70px 0px 70px",
    height: "auto",
    textAlign: "center",
    color: "#1d4458",
    marginBottom: "10px"
  };

  return (
    <Fragment>
      <Container style={pContainer}>
        <div style={sHead}>
          <Link to="/" style={{ textDecoration: "none", color: "#1d4458" }}>
            <span>Halaman Utama</span>
          </Link>
          <h2 style={{ fontWeight: "700" }}>Tentang Kami</h2>
        </div>
        <div>
          <img
            style={sImage}
            src="https://cdn.shopify.com/s/files/1/0256/2398/6281/files/image-1.jpg?v=1567132438"
            alt="Our-Photos"
          ></img>

          <h3 style={{ marginTop: "30px", fontWeight: "780" }}>
            "Brodo adalah cerita dua insinyur yang membuat bisnis dari masalah
            pribadi tentang sepatu"
          </h3>
          <div style={pStyle}>
            <p>
              Di tahun 2010, Yukka, CEO Brodo sekarang, menceritakan betapa
              sulitnya mencari sepatu ukuran 46 kepada temannya Uta.
            </p>
            <p>
              Dengan latar belakang pendidikan teknik mereka menganalisis
              masalah yang mereka hadapi. Ternyata, walaupun Indonesia mempunyai
              sumber daya material yang bagus, pengrajin sepatu yang handal,
              namun mereka tidak pernah melihat brand sepatu lokal yang bisa
              bersaing distandar internasional.
            </p>
            <p>
              Lahirlah <b>BRODO</b>, brand sepatu asli Indonesia yang bertujuan
              membuat sepatu stylish, berkualitas tinggi, dengan harga
              terjangkau.
            </p>
          </div>
          <div>
            <img
              style={sImage}
              src="https://cdn.shopify.com/s/files/1/0256/2398/6281/files/image-2.jpg?v=1567132447"
              alt="Our-Team"
            />
          </div>

          <div style={pStyle}>
            <p>
              Sekarang, kami adalah perusahaan sepatu <i>direct-to-consumer</i>{" "}
              pertama di Indonesia yang menawarkan lini produk beragam dengan
              kualitas tinggi, mulai dari sepatu formal dan <i>casual</i>, serta{" "}
              <i>sneakers</i>, dan <i>boots</i>.
            </p>
            <p style={{ marginBottom: "60px" }}>
              Dari masa ke masa kami telah menjadi <i>lifestyle brand</i> yang
              mendukung tiap orang untuk menghidupi keyakinan dan prinsip
              mereka. Semua yang <b>BRODO</b> lakukan selalu berdasar pada
              keyakinan bahwa semua orang berhak untuk mengejar tujuan hidupnya
              masing-masing, dan mewujudkan kisah hidup yang epik.
            </p>
          </div>
        </div>
        {/* 
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
        </div> */}
      </Container>
    </Fragment>
  );
};

export default AboutUs;
