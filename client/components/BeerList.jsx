import React from 'react'

const BeerList = props => {
  return (
    <div className='beerlist'>

      <p className='welcome'>
        Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.
      </p>

      <div className='beer'>
        <p className='name'>HBIB Ginger Fusion</p>
        <p className='description'>A Ginger Beer from Hawkes Bay Independent Brewery</p>
        <p>
          <span className='country'>New Zealand</span>
          <span className='abv'>5% abv</span>
          <a href='/designs/cart.html' className='cart-link'>Add to cart</a>
        </p>
      </div>

    </div>
  )
}

export default BeerList
