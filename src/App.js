import './App.css';
import React, { Component } from 'react'
import ProductSection from './Components/ProductSection';
import Header from './Components/Header';
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      productList:[]
    }
  }
  componentDidMount(){
    this.getProducts()
  }
  
    getProducts=async()=>{
      const res=await fetch("./data.json")
      const temp=await res.json()
      console.log(temp)
      this.setState({
        productList:temp
      })
    }
  
  
  render() {
    return (
      <div className='App'>
        <Header/>
        <ProductSection products={this.state.productList}/>
      </div>
    )
  }
}
