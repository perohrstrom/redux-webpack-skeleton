import React, { Component } from 'react'
import Friend from './Friend'

export default class FriendList extends Component {
  constructor(){
    super();
  }

  render(){
    const { friends } = this.props
    return(
      <table className="table table-striped">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Status</th>
        <th>Delete</th>
      </tr>
      <tbody>
      { friends.map((friend, i) =>
        <Friend
        key={i}
        index={i}
        friend={friend}
        removeFriend={this.props.removeFriend}
        updateFriend={this.props.updateFriend}
        />
      )}
      </tbody>
      </table>
    )
  }
}
