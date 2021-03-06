import React from 'react'
import { connect } from 'react-redux'

import { navigate, cancelOrder, fulfilOrder } from '../actions'
import OrderItem from './OrderItem'

class Admin extends React.Component {
state = {
  selectedOrder: ''
}

handleClick = id => () => {
  this.setState({
    selectedOrder: id
  })
}

handleCancel = () => {
  this.props.cancelOrder(this.state.selectedOrder)
}

handleFulfil = () => {
  this.props.fulfilOrder(this.state.selectedOrder)
}

render () {
  const { pending, cancelled, fulfilled } = this.props

  return (
    <div className='admin'>

      <p className='welcome'>Manage orders here</p>

      <button className='button-primary' onClick={() => this.props.navigate('BeerList')}>Return Home</button>

      <h3>Selected Order: {this.state.selectedOrder}</h3>
      <button onClick={this.handleCancel}>Cancel Order</button>
      <button onClick={this.handleFulfil}>Fulfil Order</button>

      <div className='admin-orders'>

        <div className='admin-column'>

          <h3>Orders Pending</h3>
          { typeof pending !== 'undefined' && pending.length > 0
            ? pending.map(order => {
              return (
                <OrderItem key={order.id} handleClick={this.handleClick(order.id)} order={order} />
              )
            })
            : ''
          }

        </div>
        <div className='admin-column'>
          <h3>Orders Cancelled</h3>
          { typeof cancelled !== 'undefined' && cancelled.length > 0
            ? cancelled.map(order => {
              return (
                <OrderItem key={order.id} handleClick={this.handleClick(order.id)} order={order} />
              )
            })
            : ''
          }
        </div>

        <div className='admin-column'>
          <h3>Orders Fulfilled</h3>
          { typeof fulfilled !== 'undefined' && fulfilled.length > 0
            ? fulfilled.map(order => {
              return (
                <OrderItem key={order.id} handleClick={this.handleClick(order.id)} order={order} />
              )
            })
            : ''
          }
        </div>

      </div>

    </div>
  )
}
}

const mapStateToProps = state => {
  return {
    pending: state.order.pending,
    cancelled: state.order.cancelled,
    fulfilled: state.order.fulfilled
  }
}

const mapDispatchToProps = dispatch => {
  return {
    navigate: () => dispatch(navigate('beerList')),
    cancelOrder: id => dispatch(cancelOrder(id)),
    fulfilOrder: id => dispatch(fulfilOrder(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
