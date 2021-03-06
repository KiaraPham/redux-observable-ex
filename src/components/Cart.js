import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import {connect} from 'react-redux'
import {checkout, removeFromCart} from '../actions'
import {getTotal, getCartProducts, getCheckoutError, isCheckoutPending} from '../reducers'
import {Container, Row} from 'reactstrap'

class Cart extends Component {
  render() {
    const {products, total, error, checkoutPending, checkout, removeFromCart} = this.props;

    const hasProducts = products.length > 0;
    const checkoutAllowed = hasProducts && !checkoutPending;

    const nodes = !hasProducts ?
      <em>Please add some products to cart.</em> :
      products.map(product =>
        <CartItem
          title={product.title}
          price={product.price}
          image={product.image}
          quantity={product.quantity}
          inventory={product.inventory}
          key={product.id}
          onRemove={() => removeFromCart(product.id)}/>
      )

    return (
      <Container>
        <h3>Your Cart</h3>
        <Row>{nodes}</Row>
        <p>Total: &#36;{total}</p>
        <button onClick={checkout}
                disabled={checkoutAllowed ? '' : 'disabled'}>
          Checkout
        </button>
        <div style={{color: 'red'}}>{error}</div>
      </Container>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  error: PropTypes.string,
  checkoutPending: PropTypes.bool,

  // actions
  checkout: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
}

export default connect(
  state => ({
    products: getCartProducts(state),
    total: getTotal(state),
    error: getCheckoutError(state),
    checkoutPending: isCheckoutPending(state)
  }),
  {checkout, removeFromCart}
)(Cart)