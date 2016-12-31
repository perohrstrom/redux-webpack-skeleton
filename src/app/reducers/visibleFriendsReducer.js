import { FILTER_LIST } from '../actions/index'

const initialState = []
const visibleFriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_LIST:
      return Object.assign([], state.concat(action.payload))
    default:
        return state
  }
}

export default visibleFriendsReducer
