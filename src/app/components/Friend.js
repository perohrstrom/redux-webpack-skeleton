import React, { Component } from 'react'

export default class Friend extends Component {
  constructor(){
    super();
    this.removeFriend = this.removeFriend.bind(this);
    this.updateFriend = this.updateFriend.bind(this);
  }

  removeFriend(e){
    e.preventDefault();
    this.props.removeFriend(this.props.index)
  }

  inlineStyling(){
    const { friend } = this.props
    if (friend.status === "low") {
      return "btn-warning"
    } else if (friend.status === "medium") {
      return "btn-info"
    } else if (friend.status=== "high"){
      return "btn-primary"
    } else {
      return "btn-success"
    }
  }

  updateFriend(e){
    let friend = {
      name: this.props.friend.name,
      status: e.target.text.toLowerCase()
    }
    this.props.updateFriend(friend)

  }

  render(){
    let inline = this.inlineStyling()
    const { index, friend } = this.props
    console.log(this.props,inline)
    return(
      <tr>
        <td>{index + 1}</td>
        <td>{friend.name}</td>
        <td className="btn-group">
          <button type="button" className={"btn dropdown-toggle " + inline} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {friend.status} <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li><a onClick={this.updateFriend}>Low</a></li>
            <li><a onClick={this.updateFriend}>Medium</a></li>
            <li><a onClick={this.updateFriend}>High</a></li>
            <li role="separator" className="divider"></li>
            <li><a onClick={this.updateFriend}>Confirmed</a></li>
          </ul>
        </td>
        <td>
          <button onClick={this.removeFriend} type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }
}
