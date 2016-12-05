export const ADD_FRIEND = 'ADD_FRIEND'
export const addFriend = (friend) => {
  return {
    type: ADD_FRIEND,
    payload: friend
  }
}

export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const handleChange = (text) => {
  console.log("i'm inside the handle change action", text)
  return {
    type: HANDLE_CHANGE,
    payload: text
  }
}
