import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index'
import Main from '../components/Main';

function mapStatetoProps(state) {
  return {
    // state property: initialState form,
    friends: state.friends,
    visibilityFilter: state.visibilityFilter,
    newFriend: state.newFriend
  }
}

function dispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const VisibleApp = connect(mapStatetoProps, dispatchToProps)(Main)

export default VisibleApp
