import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { getBranch } from "../../Publics/Redux/Action/products.js";

import CardStore from "../branch/ourStore.component.jsx";

class OurStore extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  ///////////////////////////////////////
  componentDidMount = async () => {
    await this.props.dispatch(getBranch()).then((res) => {
      this.setState({
        data: this.props.data
      });
    });
  };

  /////////////////////////////

  render() {
    const { data } = this.state;
    return (
      <Fragment>
        {console.log(data)}
        <CardStore data={data} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.products.dataProducts
  };
};

export default connect(mapStateToProps)(OurStore);
