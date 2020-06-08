import React from 'react'
import { connect } from 'react-redux'

import CartItem from './CartItem'
import { navigate } from '../actions'

class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cart: props.cart
    }
  }

  render () {
    // using this.props as this is a class component
    const { navigate, cart } = this.props
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
                <CartItem key={id} item={item} />
              )
            })}
          </tbody>
        </table>

        <p className='actions'>
          <a href='#' onClick={() => navigate('beerList')}>Continue shopping</a>
          <button>Update</button>
          <button className='button-primary'>Checkout</button>
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
  return {
    navigate: () => dispatch(navigate('beerList')),
    removeFromCart: (id) => dispatch(removeFromCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
