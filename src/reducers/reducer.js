 const reducer=(state, action)=>{
    if(state===undefined){
        return {
            products:[],
            total:0
        }
    }
    const product=action.payload
    const product_id=product.id
    const product_price=product.price
    switch (action.type) {
        case 'ADD_TO_CART':
            if(!state.products.includes(product_id)){
                state.products.push(product_id)
                state.total=state.total+product_price
            }
            break;
        case 'REMOVE_FROM_CART':
            if(state.products.includes(product_id)){
                const idx=state.products.indexOf(product_id)
                state.products.splice(idx,1)
                state.total=state.total-product_price
            }
            break;
        case 'INCREASE_QUANTITY':
            break
        case 'DECREASE_QUANTITY':
            break
        case 'CLEAR_CART':
            break
        default:
            break;
    }
    console.log(state)
    return {...state}
}

export default reducer