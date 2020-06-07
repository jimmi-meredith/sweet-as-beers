import React from 'react'

import beersData from '../../data/beers'

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

function getBeerNameFromId (id) {
  const beer = beersData.beers.find(beer => beer.id === id)
  return beer.name
}

export default CartItem
