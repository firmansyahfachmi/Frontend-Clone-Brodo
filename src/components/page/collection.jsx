import React, {Component} from "react";
import {Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'

import {getProducts, getProductsSearch} from '../../Publics/Redux/Action/products.js'

import CardLayer from '../card/cardCollection'

import './page.css'

class Collection extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            param: '',
            search: ''
        }
    }

    componentDidMount = async () => {
        
        let param = this.props.match.params.status;
        this.setState({
            param: param
        })

        const urlParams = new URLSearchParams(window.location.search);
        let keyword = urlParams.get('keyword') ;

        if(keyword !== null){
            await this.props.dispatch(getProductsSearch(keyword))
                .then(res => {
                    this.setState({
                        data: this.props.data,
                        search: keyword
                    })
                })
               
        }else{
            await this.props.dispatch(getProducts(param))
                .then(res => {
                    this.setState({
                        data: this.props.data
                    })
                })
        }
            
    }


    render(){
        const {param} = this.state

        return(
            
            <div className="collection">
                <Row style={{fontSize:20, fontWeight:600}} className="border-bottom pb-3">
                    <Col>
                        {param.toUpperCase()} 
                    </Col>
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