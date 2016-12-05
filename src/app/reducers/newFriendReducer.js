import { HANDLE_CHANGE } from '../actions/index'

const initialState = ''
const newFriendReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return action.payload
      default:
        return state
  }
}

export default newFriendReducer
