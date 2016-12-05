import React, { Component } from 'react'

export default class Employee extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this),
    this.submitForm = this.submitForm.bind(this)
  }

  handleChange(e){
    this.props.handleChange(e.target.value)
  }

  submitForm(){
    debugger
  }

  render(){
    console.log(this.props)
    return(
      <form onSubmit={this.submitForm}>
        <label>Add a Friend:</label>
        <input
          onChange={this.handleChange}
          type="text"
          name="friendName"
          value={this.props.newFriend}
        />
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}
