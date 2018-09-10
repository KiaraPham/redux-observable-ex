import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

class CartItem extends React.Component {
  render() {
    const { price, quantity, title, onRemove } = this.props
    return(
      <Product
      price={price}
      quantity={quantity}
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
  title: PropTypes.string,
  onRemove: PropTypes.func.isRequired
}

export default CartItem