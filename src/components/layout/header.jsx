import React from 'react'
import {Navbar, Form, Nav, Button, FormControl} from 'react-bootstrap'

import './layout.css'

const hover = () => {
    let x = document.getElementById("bodyCategory");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const hoverClose = () => {
    // let x = document.getElementById("bodyCategory");
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }
}

const Header = () => {
    return(
        <div style={{position:'fixed', width:'100%'}}>
            <Navbar style={{ height: '55px', backgroundColor: 'rgba(0, 0, 0, 0.8)', width:'100%'}}>
                <Navbar.Brand href="#home" className="col-lg-2 mr-auto" style={{ color: 'white'}}>Brodo</Navbar.Brand>
                <Nav className="mr-auto col-lg-5" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 500, letterSpacing:-0.6}}>
                    <Nav.Link href="#home" className="dropdown " style={{ color: 'white', marginBottom:-7}}>Koleksi
                        <div class="dropdown-content">
                            <Nav.Link href="#">All</Nav.Link>
                            <Nav.Link href="#">Terbaru</Nav.Link>
                            <Nav.Link href="#">Best Seller</Nav.Link>
                        </div>
                    </Nav.Link>
                    <Nav.Link onMouseOver={hover} onMouseLeave={hoverClose} style={{ color: 'white', marginBottom: -7}}>Kategori</Nav.Link>

                    <Nav.Link href="#pricing" style={{ color: 'white'}}>Jurnal</Nav.Link>
                    <Nav.Link href="#pricing" style={{ color: 'white'}}>Tentang Kami</Nav.Link>
                    <Nav.Link href="#pricing" style={{ color: 'white'}}>Toko Kami</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-1" size="sm" />
                    <Button variant="link"  style={{ color: 'white', fontSize : 16 }}><i className="fa fa-search"></i></Button>
                    <Button variant="link" style={{ color: 'white', fontSize: 16 }}><i className="fa fa-search"></i></Button>
                    <Button variant="link" style={{ color: 'white', fontSize: 16 }}><i className="fa fa-user"></i></Button>
                    <Button variant="link" style={{ color: 'white', fontSize: 16 }}><i className="fa fa-shopping-cart"></i></Button>
                </Form>
                
            </Navbar>
                <Nav id="bodyCategory">
                    <div id="sub">
                    <Nav.Link className="col-lg-2"><b>Sale</b></Nav.Link>
                        <div className="col-lg-2">
                            <ul type="none">
                                <li><Nav.Link><b>Inspirasi</b></Nav.Link></li><hr />
                                <li>Outfit Kerja</li><hr />
                                <li>Outfit Travel</li>
                            </ul>
                        </div>
                        <div className="col-lg-2"><b>Sepatu</b></div>
                        <div className="col-lg-2"><b>Sandal</b></div>
                        <div className="col-lg-2"><b>Aksesoris</b></div>
                        <div className="col-lg-2"><b>Pakaian</b></div>
                    </div>
                </Nav>


        </div>
    )
}

export default Header;