import React, { Component } from 'react';
import {getFeaturedProducts} from '../utils/fetchInfo';
import ProductThumbnails from '../components/ProductThumbnails';

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount(){
    getFeaturedProducts()
      .then(response => {
        let products = response.data.slice(0, 8)
        console.log(products);
        this.setState({
          products: products
        })
      })
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <ProductThumbnails products={this.state.products} />
      </div>
    )
  }
}
