import React from 'react'
import { connect } from 'react-redux'

import { navigate } from '../actions'

class Cart extends React.Component {
  render () {
    // using this.props as this is a class component
    const { navigate } = this.props
    return (
      <div className='cart'>

        <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching.</p>

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

// first parameter is null as this component is not using mapSateToProps
export default connect(null, mapDispatchToProps)(Cart)
