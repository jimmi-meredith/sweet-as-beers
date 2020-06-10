import React from 'react'

const BeerListItem = props => {
  // destructure from props passed in
  const { beer, addToCart } = props
  return (
    <div className='beer'>
      <p className='name'>{beer.name}</p>
      <p className='description'>A {beer.style} from {beer.brewery}</p>
      <p>
        <span className='country'>{beer.country}</span>
        <span className='abv'>{beer.abv} abv</span>
        {/* add onclick event for dispatching the addToCart action */}
        <a href='#/' className='cart-link' onClick={() => addToCart(beer.id)}>Add to cart</a>
      </p>
    </div>
  )
}

export default BeerListItem
