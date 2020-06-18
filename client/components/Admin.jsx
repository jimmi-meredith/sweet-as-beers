import React from 'react'
import { connect } from 'react-redux'

import { navigate } from '../actions'
import OrderItem from './OrderItem'

const Admin = props => {
  return (
    <div className='admin'>

      <p className='welcome'>Manage orders here</p>

      <button className='button-primary' onClick={() => props.navigate('BeerList')}>Return Home</button>

      <div className='admin-orders'>

        <div className='admin-column'>

          <h3>Orders Pending</h3>
          {props.pending.map(pendingOrder => {
            return (
              <OrderItem key={pendingOrder.id} pendingOrder={pendingOrder} />
            )
          })}

        </div>
        <div className='admin-column'>
          <h3>Orders Cancelled</h3>
        </div>

        <div className='admin-column'>
          <h3>Orders Fulfilled</h3>
        </div>

      </div>

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
