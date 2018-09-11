import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

class CartItem extends React.Component {
  render() {
    const { price, quantity, title, onRemove, inventory, image } = this.props
    return(
      <Product
      price={price}
      quantity={quantity}
      image={image}
      inventory={inventory}
      title={title}
      action={
        <button onClick={onRemove}>{'X'}</button>
      }/>
    )
  }
}

CartItem.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  onRemove: PropTypes.func.isRequired
}

export default CartItem