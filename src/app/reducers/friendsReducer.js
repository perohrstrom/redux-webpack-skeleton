import { ADD_FRIEND, REMOVE_FRIEND } from '../actions/index'

const initialState = []
const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      return [
        ...state,
        {
          name: action.payload
        }
      ]
    case REMOVE_FRIEND:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ]
    default:
        return state
  }
}

export default friendsReducer
