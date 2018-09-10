import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { price, quantity, title, action } = this.props;
    return (
      <div>
        {title} - &#36;{price} {quantity ? `x ${quantity}` : null}
        {' '}
        {action}
      </div>
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