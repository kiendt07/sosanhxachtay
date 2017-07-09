import React, { Component } from 'react';
import { Grid, Image, Item, Label, Divider } from 'semantic-ui-react';

export default function ProductVersions(props) {
  let { name, photo_url } = props.product;
  return (
    <Item.Group>
      <Item>
        <Item.Image size='medium' src={photo_url} />

        <Item.Content verticalAlign='middle'>
          <Item.Header as='a'>{name}</Item.Header>
          <Item.Extra>
            <Label>Cũ</Label>
            <Label icon='globe' content='Additional Languages' />
          </Item.Extra>
          <Item.Meta>Các phiên bản</Item.Meta>
          <Item.Description>
            asdflasdf
          </Item.Description>
          <br/>
          <Divider horizontal>Giá tốt nhất</Divider>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}
