import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';


class Product extends React.Component {
  render() {
    const {price, quantity, title, action} = this.props;
    return (
      <Col xs="6" sm="4">
        <Card>
          <CardImg top width="100%"
                   src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                   alt="Card image cap"/>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>&#36;{price}</CardSubtitle>
            <CardText>{quantity ? `x ${quantity}` : null}</CardText>
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
  title: PropTypes.string,
  action: PropTypes.node,
}

export default Product;