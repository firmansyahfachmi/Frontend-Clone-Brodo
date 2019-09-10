import React, {Fragment} from 'react'
import {Row, Col, Button} from 'react-bootstrap'

import { deleteCart } from '../../Publics/Redux/Action/cart.js'

const remove = (id) => {
    this.props.dispatch(deleteCart(id))
}


const Cart = (props) => {
    return(
        <Fragment>
            {props.data.map(cart =>(
            <Row className="mb-3">
                <Col md={3} >
                    <img src={cart.image} alt={cart.name} style={{ width: 70, marginLeft:-15}}/>
                </Col>
                <Col>
                    <Row style={{ marginBottom: 2 }}>
                        <Col ><strong>{cart.name}</strong></Col>
                    </Row>
                    <Row>
                            <Col style={{ fontSize:14 }}>Rp. {cart.price}</Col>
                    </Row>
                    <Row>
                            <Col style={{ fontSize: 14 }}>Jumlah : 3</Col>
                    </Row>
                </Col>
                <Col md={1}>
                    <Button className="p-0" variant="link" style={{textDecoration:'none', color:'grey'}} onClick={remove(cart.id)}><i className="fa fa-minus"></i></Button>
                </Col>
            </Row>
            ))}
        </Fragment>
    )
}

export default Cart
