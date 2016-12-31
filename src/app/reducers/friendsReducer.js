import { ADD_FRIEND, REMOVE_FRIEND, UPDATE_FRIEND } from '../actions/index'

const initialState = []
const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      return Object.assign([], state.concat(action.payload))
    case UPDATE_FRIEND:
      let index = state.map((e) => {
        return e.name
        }).indexOf(action.payload.name)
      return [
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index + 1)
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
