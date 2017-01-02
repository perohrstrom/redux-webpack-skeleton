import React, { Component } from 'react'

export default class FriendForm extends Component {
  constructor(props){
    super();
    this.handleChange = this.handleChange.bind(this),
    this.submitForm = this.submitForm.bind(this)
  }

  handleChange(e){
    let key = e.target.name
    let val = e.target.value
    this.props.handleChange({property: key, value: val})
  }

  submitForm(e){
    e.preventDefault()
    let friend = this.props.newFriend
    friend["status"] = "high"
    this.props.submitForm(friend)
  }

  render(){
    const { fullName, email, phone, address1, address2, city, state, zip } = this.props.newFriend
    return(
      <form onSubmit={this.submitForm} method="post" className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <input type="text" onChange={this.handleChange} name="fullName" className="form-control" placeholder="Add a Friend" value={fullName}/>
          <input type="email"  onChange={this.handleChange} name="email" className="form-control" placeholder="Email" value={email}/>
          <input type="text" onChange={this.handleChange} name="phone" className="form-control" placeholder="Phone #" value={phone} />
          <input type="text" onChange={this.handleChange} name="address1" className="form-control" placeholder="Mailing Address - Line 1" value={address1} />
          <input type="text" onChange={this.handleChange} name="address2" className="form-control" placeholder="Mailing Address - Line 2"  value={address2}/>
          <input type="text" onChange={this.handleChange} name="city" className="form-control" placeholder="City" value={city}/>
          <input type="text" onChange={this.handleChange} name="state" className="form-control" placeholder="State" value={state} />
          <input type="text" onChange={this.handleChange} name="zip" className="form-control" placeholder="Zip" value={zip} />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
}
