import React, { Component } from 'react'
import SingleProduct from './SingleProduct'

export default class ProductSection extends Component {
    
  render() {
    return (
      <div className='product-container'>
          {this.props.products.map((product, idx)=>{
              return(
                <SingleProduct product={product} key={idx} />
              )
          })}
          
      </div>
    )
  }
}
