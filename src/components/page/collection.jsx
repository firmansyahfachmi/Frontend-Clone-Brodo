import React from "react";
import {Row, Col} from 'react-bootstrap'

import CardLayer from '../card/cardCollection'

import './page.css'

const Collection = () => {
    return(
        <div className="collection">
            <Row style={{fontSize:20, fontWeight:600}} className="border-bottom pb-3">
                <Col>SEMUA PRODUK</Col>
            </Row>
            <Row>
                <Col><CardLayer/></Col>
            </Row>
        </div>
    )
}

export default Collection