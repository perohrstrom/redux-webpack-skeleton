import { connect } from 'react-redux'
import { addFriend, handleChange } from '../actions/index'
import FriendForm from '../components/FriendForm'

const mapStatetoProps = (state) => {
  return {
    newFriend: state.newFriend
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (text) => {
      dispatch(handleChange(text))
    },
    submitForm: (friend) => {
      dispatch(addFriend(friend))
    }
  }
}

const VisibleFriendForm = connect(
  mapStatetoProps,
  mapDispatchToProps
)(FriendForm)

export default VisibleFriendForm
