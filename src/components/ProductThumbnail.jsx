import React, { Component } from 'react';
import { Icon, Image as ImageComponent, Item } from 'semantic-ui-react'

export default function ProductThumbnail(props){
  let {product} = props;
  return (
    <div className="product-thumbnail">
      <Item>
        <Item.Image size='small' src={product.photo_url} />

        <Item.Content>
          <Item.Header as='a'>Cute Dog</Item.Header>
          <Item.Description>lkajsdlfjasd</Item.Description>
          <Item.Extra>
            <Icon color='green' name='check' /> 121 Votes
          </Item.Extra>
        </Item.Content>
      </Item>
    </div>
  )
}
