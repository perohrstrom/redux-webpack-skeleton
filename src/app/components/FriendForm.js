import React, { Component } from 'react'

export default class FriendForm extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this),
    this.submitForm = this.submitForm.bind(this)
  }

  handleChange(e){
    this.props.handleChange(e.target.value)
  }

  submitForm(e){
    e.preventDefault()
    let friend = {
      name: this.props.newFriend,
      status: "high"
    }
    this.props.submitForm(friend)
  }

  render(){
    return(
      <form onSubmit={this.submitForm} className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <input type="text" onChange={this.handleChange} name="friendName" className="form-control" placeholder="Add a Friend" value={this.props.newFriend}/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
}
