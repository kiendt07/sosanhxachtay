import React, { Component } from 'react';
import { Header, Button, Icon, Image, Item, Dimmer, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class ProductThumbnail extends Component {
  state = {}

  handleShow = () => this.setState({ active : true })
  handleHide = () => this.setState({ active : false })

  render() {
    let {product} = this.props;
    product.url = '/product/' + product.id;

    const { active } = this.state

    return (
      <div>
        <Dimmer.Dimmable as={Segment} dimmed={active} onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}>
          <Dimmer active={active} onClickOutside={this.handleHide}>
            <div>
              <Header as='h2' inverted>
                <Icon name='fire' size='small' />
              </Header>

              <Button primary>
                <Link to={product.url}>So sánh</Link>
              </Button>
            </div>
          </Dimmer>

            <div className="product-thumbnail">
              <Item>
                <Item.Image size='small' src={product.photo_url} />

                <Item.Content>
                  <Item.Header as='a'>{product.name}</Item.Header>
                  <Item.Description>Minh</Item.Description>
                  <Item.Extra>
                    <Icon color='green' name='check' /> 121 Votes
                  </Item.Extra>
                </Item.Content>
              </Item>
            </div>
        </Dimmer.Dimmable>

      </div>
    )
  }
}
