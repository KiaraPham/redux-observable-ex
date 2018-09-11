import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import {Button} from 'reactstrap';


class ProductItem extends React.Component {
  render() {
    const {product} = this.props
    const addToCartAction = (
      <Button
        onClick={this.props.onAddToCartClicked}
        disabled={product.inventory > 0 ? '' : 'disabled'}>
        {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </Button>
    )
    return (
      <Product
        title={product.title}
        price={product.price}
        image={product.image}
        inventory={product.inventory}
        action={addToCartAction}/>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
    }
  ).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem