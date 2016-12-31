import React, { Component } from 'react'
import Friend from './Friend'

export default class FriendList extends Component {
  constructor(){
    super();
    this.filterByName = this.filterByName.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  filterByName(searchForName, personList) {
    return personList.filter((person) => {
      return person.fullName.toLowerCase().includes(searchForName.toLowerCase());
    });
  }

  filterList(e){
    debugger
    e.target.text.toLowerCase()
    

  }

  render(){
    const { friends } = this.props
    return(
      <table className="table table-striped">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th className="btn-group">
          <button type="button" className={"btn dropdown-toggle"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Status<span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li><a onClick={this.filterList}>Low</a></li>
            <li><a onClick={this.filterList}>Medium</a></li>
            <li><a onClick={this.filterList}>High</a></li>
            <li role="separator" className="divider"></li>
            <li><a onClick={this.filterList}>Confirmed</a></li>
          </ul>
        </th>
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
