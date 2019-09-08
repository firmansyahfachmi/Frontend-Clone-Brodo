import React, {Fragment} from "react";
import { Card, Col, Row, ButtonGroup, Button, Form} from "react-bootstrap";

import './card.css'

const cardCollection = () => {
    return (
        <Fragment>
            <Row style={{marginTop:30, letterSpacing:0}}>
                <Col>Menampilkan 12 produk (<b>12</b> dari <b>178</b>)</Col>
            </Row> 
            <Row>
                <Col>
                    <ButtonGroup className="mt-3">
                        <Button variant="light" active>
                            <i className="fa fa-th-large"></i>
                        </Button>
                        <Button variant="light" className="border-left">
                            <i className="fa fa-th-list"></i>
                        </Button>
                    </ButtonGroup>
                </Col>
                <Col md={4}>
                    <Form.Row>
                        <Col>
                            <Form.Control as="select">
                                <option>Urutkan</option>
                                <option>Produk Terbaru</option>
                                <option>Produk Terlama</option>
                                <option>Nama (A-Z)</option>
                                <option>Nama (Z-A)</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Button variant="light" style={{padding:0}} className="border">
                                <span className="p-2">Filter Berdasarkan</span>
                                <span className="fa fa-angle-down bg-primary pt-2 pb-2 pl-3 pr-3" style={{color:'white', fontWeight:'bold'}}></span>
                            </Button>
                        </Col>
                    </Form.Row>
                </Col>
            </Row>
            <Row style={{ marginTop: 40}}>
                <Col md={4} style={{marginBottom:30}}>
                    <Card className="cardCollection">
                        <Card.Img variant="top" src="https://s3-ap-southeast-1.amazonaws.com/images.bro.do/media/284-1-min.jpg" alt="Brodo x Rafheoo Backpack Black" />
                        <Card.Body>
                            <Card.Title className="pb-1" style={{fontSize:15}}>Brodo x Rafheoo Backpack Black</Card.Title>
                            <Card.Text className="border-top pt-2" style={{ color:'#e06100', fontWeight:'600', fontSize:18}}>
                                Rp<span>525.000</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Fragment>
    );
};

export default cardCollection;
