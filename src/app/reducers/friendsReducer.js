import { ADD_FRIEND } from '../actions/index'

const initialState = []
const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
    console.log(state)
      return [
        ...state,
        {
          name: action.payload
        }
      ]
      default:
        return state
  }
}

export default friendsReducer
