import { ADD_ORDER } from '../actions'

// defining initial state as an array for pending orders to be added to once an order has been placed
const initialState = {
  pending: []
}

const order = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        // adds an order to the pending array
        pending: [...state.pending,
          // adds an object with an id, and the order info from the cart
          {
            id: state.pending.length + 1,
            order: action.cart
          }
        ]
      }
    default:
      return state
  }
}

export default order