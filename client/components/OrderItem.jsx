import React from 'react'

const orderItem = props => {
  return (
    <div className='order-item'>
      <p>Order #{props.pendingOrder.id}</p>
      {/* <p>Items Ordered = {props.pendingOrder.order.length}</p> */}
    </div>
  )
}

export default orderItem
