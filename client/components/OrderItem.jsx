import React from 'react'

const orderItem = props => {
  return (
    <div className='order-item' onClick={props.onClick}>
      <p>Order #{props.order.id}</p>
      {/* <p>Items Ordered = {props.pendingOrder.order.length}</p> */}
    </div>
  )
}

export default orderItem
