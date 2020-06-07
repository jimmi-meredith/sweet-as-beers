import React from 'react'

const CartItem = props => {
  return (
    <tr>
      {/* get name from props */}
      <td>{props.item.name}</td>
      {/* get quantity from props */}
      <td><input className='update-input' value={props.item.quantity} /></td>
      {/* create delete action */}
      <td><button><span className='fa fa-trash fa-2x'></span></button></td>
    </tr>
  )
}

export default CartItem
