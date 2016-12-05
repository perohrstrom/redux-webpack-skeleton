import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index'
import FriendList from '../components/FriendList'

function mapStatetoProps(state) {
  return {
    friends: state.friends
  }
}

function dispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const VisibleFriendList = connect(mapStatetoProps, dispatchToProps)(FriendList)

export default VisibleFriendList
