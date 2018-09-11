import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';


class Product extends React.Component {
  render() {
    const {price, quantity, title, action, inventory,image} = this.props;
    return (
      <Col xs="6" sm="4">
        <Card>
          <CardImg top width="100%"
                   src={image}
                   alt="Card image cap"/>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>&#36;{price}</CardSubtitle>
            <CardText>{quantity ? `Quantity: x ${quantity}` : null}</CardText>
            <CardText>Inventory: {inventory}</CardText>
            <Button>{action}</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  action: PropTypes.node,
}

export default Product;