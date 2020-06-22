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
      let selectedOrderC = state.pending.find(order => order.id === action.id)
      let newPendingC = state.pending.filter(order => order.id !== action.id)

      if (newPendingC[0].length === 0) newPendingC = []
      return {
        ...state,
        pending: newPendingC,
        cancelled: [...state.cancelled, selectedOrderC]
      }
    case FULFIL_ORDER:
      let selectedOrderF = state.pending.find(order => order.id === action.id)
      let newPendingF = state.pending.filter(order => order.id !== action.id)

      if (newPendingF[0].length === 0) newPendingF = []
      return {
        ...state,
        pending: newPendingF,
        fulfilled: [...state.cancelled, selectedOrderF]
      }
    default:
      return state
  }
}

export default order
