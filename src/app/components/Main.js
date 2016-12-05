import React, { Component } from 'react'
import VisibleFriendForm from '../containers/VisibleFriendForm'
import VisibleFriendList from '../containers/VisibleFriendList'
// import any Container Components from './/containers/___fileName'

export default class Main extends Component {
  constructor(props){
    super();
  }

  componentDidMount(){
    // if you were to perform an api call when your app mounts
    // you may have a function that looks like this:
    // const { dispatch, nameOfFunction } = this.props;
    // dispatch(nameOfFunction())
  }

  render(){
    return(
      <div>
        <h1>{"Hello World!"}</h1>
        <h2>{"This is where your other components go."}</h2>
        <h2>{"Check if they have container components. If they do, render those instead."}</h2>
        <VisibleFriendForm />
        <VisibleFriendList />
      </div>
    )
  }
}
