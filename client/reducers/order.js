import { ADD_ORDER } from '../actions'

const initialState = {
  pending: []
}

const order = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        pending: [...state.pending,
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
