const Reducer = (state,action)=>
{
    console.log(action.type);
    switch(action.type)
    {
        case 'CLEAR_CART':return {...state,cart:[]}
        case 'REMOVE_ITEM': return {...state,cart:state.cart.filter((item)=>item.id !== action.payload, console.log(action.payload.id))}
        case 'INCREASE_AMOUNT': let tempCart = state.cart.map((cartItem)=>
                                {
                                    if(cartItem.id === action.payload)
                                        return {...cartItem,amount:cartItem.amount+1}
                                    return cartItem;
                                })
                                return {...state, cart:tempCart}
        
        case 'DECREASE_AMOUNT': let tempCartDecrease = state.cart.map((cartItem)=>
                                {
                                    if(cartItem.id === action.id)
                                        return {...cartItem,amount:cartItem.amount - 1}
                                    return cartItem
                                })
                                return {...state,cart:tempCartDecrease}
        
        // case 'GET_TOTAL'       :let total =0;
        //                         let amt = 0;
        //                         state.cart.map((cartItem)=>
        //                         {  
        //                              amt += cartItem.amount;
        //                             total += amt * cartItem.price;
        //                         })
        //                         total = parseFloat(total.toFixed(2));
        //                         return {...state,total,amount:amt}

        case 'GET_TOTAL'           :let {total,amount} = state.cart.reduce((cartTotal,cartItem)=>
                                    {
                                        const { price , amount } = cartItem
                                        const itemTotal = price * amount
                                        console.log("cart totsl"+cartTotal.total);
                                        cartTotal.total += itemTotal
                                        cartTotal.amount += amount
                                        return cartTotal
                                    },
                                    {
                                        total:0,
                                        amount:0
                                    })
                                    total = parseFloat(total.toFixed(2));
                                    return {...state, total, amount}
        case 'LOADING'              : return {...state,loading:true}
        case 'DISPLAY_ITEMS'        : return{...state,cart:action.payload,loading:false}
        default: return state;
    }
}

export default Reducer;