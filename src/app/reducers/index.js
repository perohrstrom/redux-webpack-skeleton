import { combineReducers } from 'redux'
import newFriendReducer  from './newFriendReducer'
import friendsReducer from './friendsReducer'
import visibleFriendsReducer from './visibleFriendsReducer'
// import __NameofReducer__ from './nameofReducerFile' for each Reducer you create

// const indexReducer = combineReducers({
//  [name of state property]: [name of reducer which will handle its updates],
//  friends (array): friendsReducer,
//  posts: postsReducer
// })

const indexReducer = combineReducers({
  newFriend: newFriendReducer,
  friends: friendsReducer,
  visibleFriends: visibleFriendsReducer
})

export default indexReducer;
