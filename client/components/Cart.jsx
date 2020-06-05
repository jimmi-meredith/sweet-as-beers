import React from 'react'
import { connect } from 'react-redux'

import { navigate } from '../actions'

class Cart extends React.Component {
  render () {
    const { navigate } = this.props
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
          <a href='#' onClick={() => navigate('beerList')}>Continue shopping</a>
          <button>Update</button>
          <button className='button-primary'>Checkout</button>
        </p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    navigate: () => {
      dispatch(navigate('beerList'))
    }
  }
}

export default connect(null, mapDispatchToProps)(Cart)
