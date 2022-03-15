import React, { Component } from 'react'
import { connect } from 'react-redux'


class Header extends Component {
  render() {
    return (
      <div className='header'>
          <h1>Cake Store</h1>
          <button>{this.props.cartTotal?"₹ "+this.props.cartTotal:'Cart'}</button>
         
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
    const cartTotal=state.total
    return {cartTotal}
}

export default connect(mapStateToProps,null)(Header)
