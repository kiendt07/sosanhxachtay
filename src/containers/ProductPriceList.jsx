import React, { Component } from 'react';
import ProductVersions from '../components/ProductVersions';
import { getProductInfo } from '../utils/fetchInfo';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      product: {
        photo_url: ''
      }
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    getProductInfo(id).then(response => {
      console.log(response.data);
      this.setState({
        product: response.data,
        isLoading: false
      })
    })
  }

  render(){
    let { isLoading, product } = this.state;
    return (
      <div>
        <Dimmer active={isLoading}>
          <Loader />
        </Dimmer>
        <ProductVersions product={product}/>
      </div>
    )
  }
}
