import { ADD_ORDER, CANCEL_ORDER, FULFIL_ORDER } from '../actions'

// defining initial state as an array for pending orders to be added to once an order has been placed
const initialState = {
  pending: [],
  cancelled: [],
  fulfilled: []
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
    case CANCEL_ORDER:
      let selectedOrder = state.pending.find(order => order.id === action.id)
      let newPending = state.pending.filter(order => order.id !== action.id)

      if (newPending[0].length === 0) newPending = []
      return {
        ...state,
        pending: newPending,
        cancelled: [...state.cancelled, selectedOrder]
      }
    case FULFIL_ORDER:
      return state
    default:
      return state
  }
}

export default order
