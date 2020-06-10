import React from 'react'

import beersData from '../../data/beers'

const CartItem = props => {
  const { id, quantity } = props.item
  const beerName = getBeerNameFromId(id)
  return (
    <tr>
      {/* Use beer name instead of props */}
      <td>{beerName}</td>
      <td><input className='update-input' value={quantity} onChange={event => props.updateCart(id, event.target.value)} /></td>
      <td><button onClick={() => props.removeFromCart(id)}>
        <span className='fa fa-trash fa-2x'></span>
      </button></td>
    </tr>
  )
}

// use id from props to match it with the beername in the data
function getBeerNameFromId (id) {
  const beer = beersData.beers.find(beer => beer.id === id)
  return beer.name
}

export default CartItem
