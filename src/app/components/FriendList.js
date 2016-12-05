import React, { Component } from 'react'
import Friend from './Friend'

export default class FriendList extends Component {
  constructor(){
    super();
  }

  render(){
    console.log("i'm in the friend list", this.props.friends)
    const { friends } = this.props
    return(
      <div>
        <h4>{"My Friends:"}</h4>
        { friends.map((friend, i) =>
          <Friend
            key={i}
            index={i}
            name={friend.name}
            removeFriend={this.props.removeFriend}
          />
        )}
      </div>
    )
  }
}
