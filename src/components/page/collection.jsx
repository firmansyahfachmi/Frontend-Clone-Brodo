import React, {Component} from "react";
import {Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'

import {getProducts} from '../../Publics/Redux/Action/products.js'

import CardLayer from '../card/cardCollection'

import './page.css'

class Collection extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount = async () => {
        
        let param = this.props;
        
        await this.props.dispatch(getProducts(param))
            .then(res => {
                this.setState({
                    data: this.props.data
                })
            })
    }

    render(){
        
        return(
            
            <div className="collection">
                <Row style={{fontSize:20, fontWeight:600}} className="border-bottom pb-3">
                    <Col>SEMUA PRODUK</Col>
                </Row>
                <Row>
                    <Col><CardLayer products={this.state.data}/></Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        data:state.products.dataProducts
    }
}

export default connect (mapStateToProps) (Collection);