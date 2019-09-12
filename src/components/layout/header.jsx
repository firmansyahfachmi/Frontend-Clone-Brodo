import React, {Component} from 'react'
import {Navbar, Form, Nav, Button, FormControl, Row, Col, ButtonGroup} from 'react-bootstrap'

import {connect} from 'react-redux'
import { getCart, deleteCart } from '../../Publics/Redux/Action/cart.js'

import './layout.css'

import Cart from "../card/cart";





class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            search:'',
            dataCart: null
        }
        
    }

    componentDidMount = async () => {
        await this.props.dispatch(getCart())
            .then(res => {
                this.setState({
                    dataCart: this.props.cart
                })
            })
    }

    
    hover = () => {
        let x = document.getElementById("bodyCategory");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else{
            x.style.display = "block";
        }
    }

    hoverClose = () => {
        let x = document.getElementById("bodyCategory");
        if (x.style.display === "block") {
            x.style.display = "none";
        } 
    }

    loginClose = () => {
        let x = document.getElementById("login");
        if (x.style.display === "block") {
            x.style.display = "none";
            document.getElementById('over2').style.display = 'none'
        } 
        
    }

    openSearch = () => {
        document.getElementById("searched").style.border = "1px solid silver";
        document.getElementById("searched").style.width = "160px";
        document.getElementById("searched").style.padding = "5px";
        

    }

    closeSearch = () => {
        document.getElementById("searched").style.width = "0px";
        document.getElementById("searched").style.padding = "0px";
        document.getElementById("searched").style.border = "none";
    
    }


    loginShow= () => {
        let x = document.getElementById("login");
        if (x.style.display === "block") {
            x.style.display = "none";
            document.getElementById('over2').style.display = 'none'
        } else {
            x.style.display = "block";
            document.getElementById('over2').style.display = 'initial'
        }
    
    }

    openNav = () => {
        document.getElementById("Sidepanel").style.width = "300px";
        document.getElementById('over').style.display = 'initial'
    }

    closeNav = () => {
        document.getElementById("Sidepanel").style.width = "0";
        document.getElementById('over').style.display = 'none'
    }

    handleChange = async e => {

        await this.setState({
            search: e.target.value 
        })

    
    }

    removeHandle = (id) => {

        this.props.dispatch(deleteCart(id))


    }

    
    render(){
        
        const {dataCart} = this.state
        console.log("kl", this.props.cart)

        let backColor = (this.props.headType === 'white') ?  'rgb(255, 255, 255)' : 'rgba(0, 0, 0, 0.8)'
        let color = (this.props.headType === 'white') ?  '#333333' : 'rgb(255, 255, 255)'
        let image = (this.props.headType === 'white') ?  'https://s3-ap-southeast-1.amazonaws.com/bucket-brodo/icon/logo-brodo-new-active.png' : 'https://s3-ap-southeast-1.amazonaws.com/bucket-brodo/icon/logo-brodo-new-inactive.png'
        let border = (this.props.headType === 'white') ?  'border' : ''

    return(

        <div style={{position:'fixed', width:'100%', zIndex : "6"}}>
            <Navbar id="navbare" className={border} style={{ height: '55px', backgroundColor: backColor, width:'100%', zIndex:'2'}}>
                <Navbar.Brand href="/" className="col-lg-2 mr-auto">
                    <img src={image} width="100px" alt="logo"/></Navbar.Brand>
                <Nav className="mr-auto col-lg-5" style={{ position:'fixed',left:'29%',display: 'flex', justifyContent: 'space-between', fontWeight: 500, letterSpacing:-0.1}} > 
                    <Nav.Link href="/collection/all" onMouseOver={this.hoverClose} className="dropdown" style={{ color:color, marginBottom:-7}}>Koleksi
                        <div className="dropdown-content border">
                            <Nav.Link href="/collection/all" className="collect" style={{color:'black'}}>All</Nav.Link>
                            <Nav.Link href="/collection/new product" className="collect" style={{ color: 'black' }}>Terbaru</Nav.Link>
                            <Nav.Link href="/collection/best seller" className="collect" style={{ color: 'black' }}>Best Seller</Nav.Link>
                        </div>
                    </Nav.Link>
                    <Nav.Link onMouseOver={this.hover} style={{ color:color, marginBottom: -7}}>Kategori</Nav.Link>

                    <Nav.Link href="" style={{ color:color}}>Jurnal</Nav.Link>
                    <Nav.Link href="" style={{ color:color}}>Tentang Kami</Nav.Link>
                    <Nav.Link href="/pages/our-store" style={{ color:color}}>Toko Kami</Nav.Link>
                </Nav>

                <Form inline>

                    <FormControl type="text" onMouseLeave={this.closeSearch} id="searched" placeholder="Search" className="mr-sm-1" size="sm" onKeyPress={ (e) =>{
                        if(e.key === 'Enter'){
            
                            return (
                                this.props.history.push(`/collection/search?keyword=${this.state.search} `, window.location.href=`/collection/search?keyword=${this.state.search} `)
                            )
                        }
                    }} onChange={this.handleChange}/>

                    <Button variant="link" style={{ color:color, fontSize : 16 }}><i className="fa fa-search" onClick={this.openSearch}></i></Button>
                    <Button onClick={this.loginShow} onMouseOver={this.hoverClose} variant="link" style={{ color:color, fontSize: 16}}><i className="fa fa-user"></i></Button>
                    <Button variant="link" style={{ color:color, fontSize: 16 }}><i className="fa fa-heart"></i></Button>
                    <Button variant="link" onClick={this.openNav} style={{ color:color, fontSize: 16 }}><i className="fa fa-shopping-cart"></i></Button>
                </Form>

                <div id="Sidepanel" className="sidepanel">
                    <div style={{display:'flex'}} className="topSide">
                        <div>KERANJANG</div>    
                        <Nav.Link href="" className="closebtn" onClick={this.closeNav}>x</Nav.Link>
                    </div>
                    <Row className="ml-3 mr-3 mb-2">
                        {(dataCart === null) ? 
                        <Col className="border-bottom a">KERANJANG KOSONG</Col>
                        :
                        <Col className="border-bottom">
                            <div><Cart data={dataCart} handler={this.removeHandle}/></div>
                        </Col>
                        }
                    </Row>
                    <Row className="total">
                        
                        <Col>
                            <Row style={{marginBottom:10}}>
                                <Col style={{ border: '1px solid black', padding: 6 }}>Total
                                    <span style={{ float:'right'}}>Rp</span>
                                </Col>
                            </Row>
                            <Row>
                                {(dataCart === null)?
                                <Col style={{padding:0}}><Button block>BELANJA SEKARANG BRO</Button></Col>
                                :
                                <Col style={{ padding: 0}} className="bg-danger">
                                    <ButtonGroup style={{ width:'100%'}}>
                                        <Button variant="secondary">KERANJANG</Button>
                                        <Button >BAYAR</Button>
                                    </ButtonGroup>
                                </Col>
                                }
                            </Row>
                        </Col>
                        
                    </Row>
                    
                </div>
                <div id="over" className="overlay"></div>
                <div id="over2" className="overlay2"></div>
            </Navbar>

            <Nav id="bodyCategory" className="border" style={{ fontSize: 16 }} onMouseLeave={this.hoverClose}>
                    <div id="sub">
                    <Nav.Link href="/collection/sale" className="col-lg-1 linkNav"><b>Sale</b></Nav.Link>
                        <div className="col-lg-2">
                            <ul type="none">
                                <li><Nav.Link href="/collection/inspirasi" className="border-bottom linkNav"><b>Inspirasi</b></Nav.Link></li>
                            <li><Nav.Link href="/collection/outfit kerja" className="border-bottom linkNav">Outfit Kerja</Nav.Link></li>
                            <li><Nav.Link href="/collection/outfit travel" className="linkNav">Outfit Travel</Nav.Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul type="none">
                            <li><Nav.Link href="/collection/shoes" className="border-bottom linkNav"><b>Sepatu</b></Nav.Link></li>
                            <li><Nav.Link href="/collection/signature" className="border-bottom linkNav">Signature Collections</Nav.Link></li>
                            <li><Nav.Link href="/collection/sneakers" className="border-bottom linkNav">Sneakers</Nav.Link></li>
                            <li><Nav.Link href="/collection/boots" className="linkNav">Boots</Nav.Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-1">
                        <Nav.Link href="/collection/sandal" className="linkNav"><b>Sandal</b></Nav.Link>
                        </div>
                        <div className="col-lg-2">
                            <ul type="none">
                            <li><Nav.Link href="/collection/aksesoris" className="border-bottom linkNav"><b>Aksesoris</b></Nav.Link></li>
                            <li><Nav.Link href="/collection/grooming" className="linkNav">Grooming</Nav.Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <ul type="none">
                            <li><Nav.Link href="/collection/pakaian" className="border-bottom linkNav"><b>Pakaian</b></Nav.Link></li>
                            <li><Nav.Link href="/collection/atasan" className="border-bottom linkNav">Atasan</Nav.Link></li>
                            <li><Nav.Link href="/collection/bawahan" className="linkNav">Bawahan</Nav.Link></li>
                            </ul>
                        </div>
                    </div>
                </Nav>

                <div id="login" className="border" onMouseLeave={this.loginClose}>
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
}

const mapStateToProps = state =>{
    return {
        cart:state.cart.addedCart
    }
}

export default connect (mapStateToProps) (Header);