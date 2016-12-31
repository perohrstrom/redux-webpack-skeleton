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
        <div>
          <VisibleFriendForm />
          <VisibleFriendList />
        </div>
      </div>
    )
  }
}
