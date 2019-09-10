import React, { Fragment, Component } from "react";
import {connect} from 'react-redux'

import { getProductsDetail } from '../../Publics/Redux/Action/products.js'

import Detail from "../detail/Detail";

class detail extends Component {
  constructor(){
    super()
    this.state = {
      dataDetail : [],
      param: ''
    }
  }

  componentDidMount = async () => {

    let param = this.props.match.params.name;
    this.setState({
      param: param
    })

    await this.props.dispatch(getProductsDetail(param))
      .then(res => {
        this.setState({
          dataDetail: this.props.detail
        })
      })
  }

  render(){
    return (
      <Fragment>
        <Detail detailProducts={this.state.dataDetail}/>
      </Fragment>
    )
  }

}

const mapStateToProps = state => {
  return{
    detail: state.products.dataProductsDetail
  }
}

export default connect (mapStateToProps) (detail);
