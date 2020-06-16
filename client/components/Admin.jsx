import React from 'react'
import { connect } from 'react-redux'

import { navigate } from '../actions'

const Admin = props => {
  return (
    <div className='admin'>

      <p className='welcome'>Manage orders here</p>

      <button className='button-primary' onClick={() => props.navigate('BeerList')}>Return Home</button>

      <h3>Orders Pending</h3>

    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    navigate: () => dispatch(navigate('beerList'))
  }
}

export default connect(null, mapDispatchToProps)(Admin)
