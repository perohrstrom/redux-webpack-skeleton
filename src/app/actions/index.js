export const ADD_FRIEND = 'ADD_FRIEND'
export const addFriend = (friend) => {
  return {
    type: ADD_FRIEND,
    payload: friend
  }
}

export const REMOVE_FRIEND = 'REMOVE_FRIEND'
export const removeFriend = (index) => {
  return {
    type: REMOVE_FRIEND,
    payload: index
  }
}

export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const handleChange = (text) => {
  return {
    type: HANDLE_CHANGE,
    payload: text
  }
}

export const UPDATE_FRIEND = 'UPDATE_FRIEND'
export const updateFriend = (friend) => {
  return {
    type: UPDATE_FRIEND,
    payload: friend
  }
}
