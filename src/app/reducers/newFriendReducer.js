import { HANDLE_CHANGE, ADD_FRIEND } from '../actions/index'

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: ''
}
const newFriendReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      let obj = Object.assign({}, state)
      Object.keys(obj).forEach((key) => {
        if (key === action.payload.property) {
          return obj[key] = action.payload.value
        }
      })
      return obj
    case ADD_FRIEND:
      return initialState
    default:
        return state
  }
}

export default newFriendReducer
