import React from 'react'

const CartItem = props => {
  return (
    <tr>
      {/* get name from props */}
      <td>Beer Name</td>
      {/* get quantity from props */}
      <td><input className='update-input' value="3" /></td>
      {/* create delete action */}
      <td><button><span className='fa fa-trash fa-2x'></span></button></td>
    </tr>
  )
}

export default CartItem
