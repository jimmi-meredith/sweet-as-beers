import React from 'react'
import { connect } from 'react-redux'

import { navigate } from '../actions'
import OrderItem from './OrderItem'

const Admin = props => {
  return (
    <div className='admin'>

      <p className='welcome'>Manage orders here</p>

      <button className='button-primary' onClick={() => props.navigate('BeerList')}>Return Home</button>

      <h3>Orders Pending</h3>

      {props.pending.map(order => {
        return (
          <OrderItem key={order.id} order={order} />
        )
      })}

    </div>
  )
}

const mapStateToProps = state => {
  return {
    pending: state.order.pending
  }
}

const mapDispatchToProps = dispatch => {
  return {
    navigate: () => dispatch(navigate('beerList'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
