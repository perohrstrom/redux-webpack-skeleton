import React, { Component } from 'react'
import Friend from './Friend'

export default class FriendList extends Component {
  constructor(){
    super();
    this.filterByName = this.filterByName.bind(this);
    this.setVisiblityFilter = this.setVisiblityFilter.bind(this);
  }

  filterByName(searchForName, personList) {
    return personList.filter((person) => {
      return person.fullName.toLowerCase().includes(searchForName.toLowerCase());
    });
  }

  setVisiblityFilter(e){
    let filter = "SHOW_" + e.target.text.toUpperCase()
    this.props.setVisiblityFilter(filter)
  }

  render(){
    const { friends } = this.props
    return(
      <table className="table">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th >Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zip</th>

        <th className="btn-group">
          <button type="button" className={"btn dropdown-toggle"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Status<span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li><a onClick={this.setVisiblityFilter}>Low</a></li>
            <li><a onClick={this.setVisiblityFilter}>Medium</a></li>
            <li><a onClick={this.setVisiblityFilter}>High</a></li>
            <li role="separator" className="divider"></li>
            <li><a onClick={this.setVisiblityFilter}>Confirmed</a></li>
            <li role="separator" className="divider"></li>
            <li><a onClick={this.setVisiblityFilter}>All</a></li>
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
