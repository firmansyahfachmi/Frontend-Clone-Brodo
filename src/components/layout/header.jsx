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
        document.getElementById('over2').style.display = 'none'
    } 
    
}

const openSearch = () => {
     document.getElementById("searched").style.width = "160px";
     document.getElementById("searched").style.padding = "5px";
}

const closeSearch = () => {
     document.getElementById("searched").style.width = "0px";
     document.getElementById("searched").style.padding = "0px";
}


const loginShow= () => {
    let x = document.getElementById("login");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById('over2').style.display = 'none'
    } else {
        x.style.display = "block";
        document.getElementById('over2').style.display = 'initial'
    }
    
}

const openNav = () => {
    document.getElementById("Sidepanel").style.width = "300px";
    document.getElementById('over').style.display = 'initial'
}

const closeNav = () => {
    document.getElementById("Sidepanel").style.width = "0";
    document.getElementById('over').style.display = 'none'
}


const Header = (props) => {

    let backColor = (props.headType === 'white') ?  'rgb(255, 255, 255)' : 'rgba(0, 0, 0, 0.8)'
    let color = (props.headType === 'white') ?  '#333333' : 'rgb(255, 255, 255)'
    let image = (props.headType === 'white') ?  'https://s3-ap-southeast-1.amazonaws.com/bucket-brodo/icon/logo-brodo-new-active.png' : 'https://s3-ap-southeast-1.amazonaws.com/bucket-brodo/icon/logo-brodo-new-inactive.png'
    let border = (props.headType === 'white') ?  'border' : ''

    return(
        <div style={{position:'fixed', width:'100%', zIndex : "6"}}>
            <Navbar id="navbare" className={border} style={{ height: '55px', backgroundColor: backColor, width:'100%', zIndex:'2'}}>
                <Navbar.Brand href="/" className="col-lg-2 mr-auto">
                    <img src={image} width="100px" alt="logo"/></Navbar.Brand>
                <Nav className="mr-auto col-lg-5" style={{ position:'fixed',left:'29%',display: 'flex', justifyContent: 'space-between', fontWeight: 500, letterSpacing:-0.1}} > 
                    <Nav.Link href="/collection" onMouseOver={hoverClose} className="dropdown" style={{ color:color, marginBottom:-7}}>Koleksi
                        <div className="dropdown-content border">
                            <Nav.Link href="/collection/all" className="collect" style={{color:'black'}}>All</Nav.Link>
                            <Nav.Link href="/collection/new product" className="collect" style={{ color: 'black' }}>Terbaru</Nav.Link>
                            <Nav.Link href="/collection/best seller" className="collect" style={{ color: 'black' }}>Best Seller</Nav.Link>
                        </div>
                    </Nav.Link>
                    <Nav.Link onMouseOver={hover} style={{ color:color, marginBottom: -7}}>Kategori</Nav.Link>

                    <Nav.Link href="#pricing" style={{ color:color}}>Jurnal</Nav.Link>
                    <Nav.Link href="#pricing" style={{ color:color}}>Tentang Kami</Nav.Link>
                    <Nav.Link href="#pricing" style={{ color:color}}>Toko Kami</Nav.Link>
                </Nav>

                <Form inline>
                    <FormControl type="text" onMouseLeave={closeSearch} id="searched" placeholder="Search" className="mr-sm-1" size="sm"/>
                    <Button variant="link" style={{ color:color, fontSize : 16 }}><i className="fa fa-search" onClick={openSearch}></i></Button>
                    <Button onClick={loginShow} onMouseOver={hoverClose} variant="link" style={{ color:color, fontSize: 16}}><i className="fa fa-user"></i></Button>
                    <Button variant="link" style={{ color:color, fontSize: 16 }}><i className="fa fa-heart"></i></Button>
                    <Button variant="link" onClick={openNav} style={{ color:color, fontSize: 16 }}><i className="fa fa-shopping-cart"></i></Button>
                </Form>

                <div id="Sidepanel" className="sidepanel">
                    <div style={{display:'flex'}} className="topSide">
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
                <div id="over" className="overlay"></div>
                <div id="over2" className="overlay2"></div>
            </Navbar>

            <Nav id="bodyCategory" className="border" style={{ fontSize: 16 }} onMouseLeave={hoverClose}>
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

                <div id="login" className="border" onMouseLeave={loginClose}>
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