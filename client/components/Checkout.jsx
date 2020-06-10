import React from 'react'
import { connect } from 'react-redux'

export const Checkout = () => {
  return (
    <div className='checkout'>
      <p className='welcome'>
        Thank you for your purchase! We hope you enjoy your order.
      </p>
      <button className='button-primary'>Return Home</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    navigate: () => dispatch(navigate('listing'))
  }
}

export default connect(null, mapDispatchToProps)(Checkout)
