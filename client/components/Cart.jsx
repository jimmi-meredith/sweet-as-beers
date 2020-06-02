import React from 'react'

class Cart extends React.Component {
  render () {
    return (
      <div className='cart'>
        <table>
          <thead>
            <tr>
              <td>Beer</td>
              <td>Quantity</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>

        <p className='actions'>
          <a href='/designs/listing.html'>Continue shopping</a>
          <button>Update</button>
          <button className='button-primary'>Checkout</button>
        </p>
      </div>
    )
  }
}

export default Cart
