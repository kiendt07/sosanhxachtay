import React, { Component } from 'react';
import { Grid, Item } from 'semantic-ui-react';
import ProductThumbnail from './ProductThumbnail';

const ProductThumbnails = (props) => {
  let {products} = props;
  return(
    <Grid columns={3} divided>
      <Grid.Row>

          {products.map((product, i) => (
            <Grid.Column>
              <ProductThumbnail key={i} product={product}/>
            </Grid.Column>
          ))}


      </Grid.Row>
    </Grid>

  )
}

export default ProductThumbnails;
