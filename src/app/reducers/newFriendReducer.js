import { HANDLE_CHANGE, ADD_FRIEND } from '../actions/index'

const initialState = ''
const newFriendReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return action.payload
    case ADD_FRIEND:
      return ''
    default:
        return state
  }
}

export default newFriendReducer
