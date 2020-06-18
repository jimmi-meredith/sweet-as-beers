import React from 'react'
import { connect } from 'react-redux'

import CartItem from './CartItem'
import { navigate, removeFromCart, updateQuantities, addOrder, clearCart } from '../actions'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: props.cart
    }
  }

  // making a function called removeItem that uses the removeFromCart function given as props from mapDispatchToProps
  removeItem = id => {
    const cart = this.state.cart.filter(item => item.id !== id)
    this.setState({ cart })
    // this is where the id is given to removeFromCart dispatch
    this.props.removeFromCart(id)
  }

  updateCart = (id, quantity) => {
    this.setState({
      // for each item in the cart, map the item's id with the one selected, then update the quantity value
      cart: this.state.cart.map(item => {
        if (item.id === id) {
          item.quantity = Number(quantity)
        }
        return item
      })
    })
  }

  // create a separate handleClick function for checkout button
  handleCheckout = () => {
    this.props.navigate('checkout')
    this.props.addOrder(this.state.cart)
    this.props.clearCart()
  }

  render() {
    // using this.props as this is a class component
    const { navigate, cart, updateQuantities } = this.props
    return (
      <div className='cart'>

        <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching.</p>

        <table>
          <thead>
            <tr>
              <td>Beer</td>
              <td>Quantity</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, id) => {
              return (
                <CartItem key={id} item={item} updateCart={this.updateCart} removeFromCart={this.removeItem} />
              )
            })}
          </tbody>
        </table>

        <p className='actions'>
          <a href='#' onClick={() => navigate('beerList')}>Continue shopping</a>
          <button onClick={() => updateQuantities(this.state.cart)}>Update</button>
          <button className='button-primary' onClick={this.handleCheckout} disabled={this.state.cart.length === 0}>Checkout</button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  // importing actions to be used in this component
  return {
    // change navigate to take a pageState instead of a hard coded string because there are multiple sifferent navigate links in this component
    navigate: pageState => dispatch(navigate(pageState)),
    removeFromCart: id => dispatch(removeFromCart(id)),
    updateQuantities: cart => dispatch(updateQuantities(cart)),
    addOrder: cart => dispatch(addOrder(cart)),
    clearCart: () => dispatch(clearCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
