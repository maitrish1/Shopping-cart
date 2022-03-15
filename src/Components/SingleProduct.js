import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addToCart, removeFromCart} from '../actions/action'

class SingleProduct extends Component {
  render() {
    return (
      <div className='single-product'>
          <img src={this.props.product?.image}/>
          <h3>{this.props.product?.name}</h3>
          <p>₹ {this.props.product?.price}</p>
          {this.props.isPresent?
          (<button onClick={this.props.deleteProduct}>Remove from Cart</button>)
          :
          (<button onClick={this.props.addProduct}>Add to cart</button>)  
        }
      </div>
    )
  }
}
// always 2 functions
const mapStateToProps=(state, originalProps)=>{
    const currentProductId=originalProps.product.id
    const cartList=state.products
    let isPresent=false
    if(cartList.includes(currentProductId)){
        isPresent=true
    }
    return {isPresent}
}

const mapDispatchToProps=(dispatch, originalProps)=>{ // originalProps is basically this.props. We are taking it as a param, since we need to pass originalProps.product as a param 
    const addProduct=()=>{ // When we call dispatch it directly goes to action.js to reducers
        dispatch(addToCart(originalProps.product)) // we can also pass payload/data (data for which item is added to cart) as a param to addProduct()
    }
    const deleteProduct=()=>{
        dispatch(removeFromCart(originalProps.product))
    }
    return {
        addProduct,
        deleteProduct
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
