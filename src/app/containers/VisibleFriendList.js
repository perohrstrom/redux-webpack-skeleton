import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index'
import FriendList from '../components/FriendList'

const getVisibleFriends = (friends, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return friends
    case 'SHOW_CONFIRMED':
      return friends.filter(friend => friend.status === "confirmed")
    case 'SHOW_PRIORITY':
      return friends.filter(friend => friend.status === "priority")
    case 'SHOW_HIGH':
      return friends.filter(friend => friend.status === "high")
    case 'SHOW_MEDIUM':
      return friends.filter(friend => friend.status === "medium")
    case 'SHOW_LOW':
      return friends.filter(friend => friend.status === "low")
  }
}

const mapStatetoProps = (state) => {
  return {
    friends: getVisibleFriends(state.friends, state.visibilityFilter)
  }
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

const VisibleFriendList = connect(mapStatetoProps, dispatchToProps)(FriendList)

export default VisibleFriendList
