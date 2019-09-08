import React from 'react'
import {Navbar, Form, Nav, Button, FormControl, Row, Col} from 'react-bootstrap'

import './layout.css'

const hover = () => {
    let x = document.getElementById("bodyCategory");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else{
        x.style.display = "block";
    }
}

const hoverClose = () => {
    let x = document.getElementById("bodyCategory");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
}

const loginClose = () => {
    let x = document.getElementById("login");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
}


const loginShow= () => {
    let x = document.getElementById("login");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const openNav = () => {
    document.getElementById("Sidepanel").style.width = "300px";
}

const closeNav = () => {
    document.getElementById("Sidepanel").style.width = "0";
}

const Header = () => {
    return(
        <div style={{position:'fixed', width:'100%', zIndex : "1"}}>
            <Navbar style={{ height: '55px', backgroundColor: 'rgba(0, 0, 0, 0.8)', width:'100%'}}>
                <Navbar.Brand href="#home" className="col-lg-2 mr-auto" style={{ color: 'white' }}>
                    <img src="https://s3-ap-southeast-1.amazonaws.com/bucket-brodo/icon/logo-brodo-new-inactive.png" width="100px" alt="logo"/></Navbar.Brand>
                <Nav className="mr-auto col-lg-5" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 500, letterSpacing:-0.1}} > 
                    <Nav.Link href="#home" onMouseOver={hoverClose} className="dropdown" style={{ color: 'white', marginBottom:-7}}>Koleksi
                        <div class="dropdown-content">
                            <Nav.Link href="#" className="collect" style={{color:'black'}}>All</Nav.Link>
                            <Nav.Link href="#" className="collect" style={{ color: 'black' }}>Terbaru</Nav.Link>
                            <Nav.Link href="#" className="collect" style={{ color: 'black' }}>Best Seller</Nav.Link>
                        </div>
                    </Nav.Link>
                    <Nav.Link onMouseOver={hover}  style={{ color: 'white', marginBottom: -7}}>Kategori</Nav.Link>

                    <Nav.Link href="#pricing" style={{ color: 'white'}}>Jurnal</Nav.Link>
                    <Nav.Link href="#pricing" style={{ color: 'white'}}>Tentang Kami</Nav.Link>
                    <Nav.Link href="#pricing" style={{ color: 'white'}}>Toko Kami</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" id="searched"  placeholder="Search" className="mr-sm-1" size="sm"/>
                    <Button variant="link" style={{ color: 'white', fontSize : 16 }}><i className="fa fa-search"></i></Button>
                    <Button onClick={loginShow} onMouseOver={hoverClose} variant="link" style={{ color: 'white', fontSize: 16}}><i className="fa fa-user"></i></Button>
                    <Button variant="link" style={{ color: 'white', fontSize: 16 }}><i className="fa fa-heart"></i></Button>
                    <Button variant="link" onClick={openNav} style={{ color: 'white', fontSize: 16 }}><i className="fa fa-shopping-cart"></i></Button>
                </Form>

                <div id="Sidepanel" className="sidepanel">
                    <div style={{display:'flex'}} class="topSide">
                        <div>KERANJANG</div>    
                        <Nav.Link href="" className="closebtn" onClick={closeNav} style={{ }}>x</Nav.Link>
                    </div>
                    <Row className="a">
                        <Col className="border-bottom">KERANJANG KOSONG</Col>
                    </Row>
                    <Row className="total">
                        
                        <Col>
                            <Row style={{marginBottom:10}}>
                                <Col style={{ border: '1px solid black', padding: 6 }}>Total
                                    <span style={{ float:'right'}}>Rp</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{padding:0}}><Button block>BELANJA SEKARANG BRO</Button></Col>
                            </Row>
                        </Col>
                        
                    </Row>
                    
                </div>
            </Navbar>

            <Nav id="bodyCategory" style={{ fontSize: 16 }} onMouseLeave={hoverClose}>
                    <div id="sub">
                        <Nav.Link className="col-lg-1 linkNav"><b>Sale</b></Nav.Link>
                        <div className="col-lg-2">
                            <ul type="none">
                                <li><Nav.Link className="border-bottom linkNav"><b>Inspirasi</b></Nav.Link></li>
                                <li><Nav.Link className="border-bottom linkNav">Outfit Kerja</Nav.Link></li>
                                <li><Nav.Link className="linkNav">Outfit Travel</Nav.Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul type="none">
                                <li><Nav.Link className="border-bottom linkNav"><b>Sepatu</b></Nav.Link></li>
                                <li><Nav.Link className="border-bottom linkNav">Signature Collections</Nav.Link></li>
                                <li><Nav.Link className="border-bottom linkNav">Sneakers</Nav.Link></li>
                                <li><Nav.Link className="linkNav">Boots</Nav.Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-1">
                            <Nav.Link className="linkNav"><b>Sandal</b></Nav.Link>
                        </div>
                        <div className="col-lg-2">
                            <ul type="none">
                                <li><Nav.Link className="border-bottom linkNav"><b>Aksesoris</b></Nav.Link></li>
                                <li><Nav.Link className="linkNav">Grooming</Nav.Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <ul type="none">
                                <li><Nav.Link className="border-bottom linkNav"><b>Pakaian</b></Nav.Link></li>
                                <li><Nav.Link className="border-bottom linkNav">Atasan</Nav.Link></li>
                                <li><Nav.Link className="linkNav">Bawahan</Nav.Link></li>
                            </ul>
                        </div>
                    </div>
                </Nav>

                <div id="login" onMouseLeave={loginClose}>
                    <Row>
                        <Col style={{paddingBottom:20}}>
                            <div style={{fontWeight:600}}><i className="fa fa-user" style={{fontSize:28}}></i>
                            <span style={{ marginLeft: 15, fontSize: 24}}>Masuk Ke Akun</span></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ paddingBottom: 17 }}>
                            <Form.Control type="text" placeholder="Email Bro/Sis"/>
                        </Col>
                    </Row>
                    <Row style={{ paddingBottom: 17 }}>
                        <Col>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Row>
                    <Row style={{paddingBottom:10}}>
                        <Col>
                            <Button block>MASUK</Button>
                            
                        </Col>
                    </Row>
                    <Row style={{ textAlign: 'right', paddingBottom:15}}>
                        <Col >
                            <Nav.Link className="linkNav" style={{fontWeight:500}}>Lupa Password?</Nav.Link>
                        </Col>
                    </Row>
                <Row style={{ backgroundColor:'whitesmoke', marginLeft:-20, marginRight:-20,textAlign:'center',
            padding:10, fontSize:15}}>
                    <Col >
                        Belum punya akun?
                        <Nav.Link style={{color:'black', fontWeight:600,marginTop:-10}}>Buat akun brothers sekarang</Nav.Link>
                    </Col>
                </Row>
                   
                </div>


        </div>
    )
}

export default Header;