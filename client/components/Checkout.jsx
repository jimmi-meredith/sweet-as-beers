import React from 'react'
import { connect } from 'react-redux'

import { navigate } from '../actions'

export const Checkout = props => {
  return (
    <div className='checkout'>
      <p className='welcome'>
        Thank you for your purchase! We hope you enjoy your order.
      </p>
      <button className='button-primary' onClick={() => props.navigate('beerList')}>Return Home</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    navigate: () => dispatch(navigate('beerList'))
  }
}

export default connect(null, mapDispatchToProps)(Checkout)
