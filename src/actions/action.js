// const ADD_TO_CART={
//     type:'ADD_TO_CART'
// }
// instead of returning an object we can also return a function

  const addToCart=(payload)=>{
    return{
      type:'ADD_TO_CART',
      payload
   }
  }
const removeFromCart=(payload)=>{
    return{
        type:'REMOVE_FROM_CART',
        payload
    }
}
const INCREASE_QUANTITY={
    type:'INCREASE_QUANTITY'
}
const DECREASE_QUANTITY={
    type:'DECREASE_QUANTITY'
}
const CLEAR_CART={
    type:'CLEAR_CART'
}

export {removeFromCart, addToCart,INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_CART}