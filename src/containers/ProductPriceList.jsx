import React from 'react';

const ProductPriceList = (props) => {
  let { match } = props;
  return (
    <div>
      product { match.params.id }
    </div>
  )
}

export default ProductPriceList;
