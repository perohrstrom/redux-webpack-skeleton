import React, { Component } from 'react'

export default class Friend extends Component {
  constructor(){
    super();
    this.removeFriend = this.removeFriend.bind(this)
  }

  removeFriend(e){
    e.preventDefault();
    this.props.removeFriend(this.props.index)
  }

  render(){
    console.log("i'm in the friend component",this.props)
    const { index, name } = this.props
    return(
      <div>
        <h4>#{index + 1} - {name}</h4>
        <form onSubmit={this.removeFriend}>
          <input type="submit" value="Remove Friend" />
        </form>
      </div>
    )
  }
}
