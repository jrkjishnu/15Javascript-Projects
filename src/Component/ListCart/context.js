import React, { useContext, useEffect, useReducer, useState } from 'react';
import cartItems from './data';
import Axios from 'axios';
import Reducer from './Reducer';
const AppContext = React.createContext();
const url = 'https://course-api.com/react-useReducer-cart-project';
const initialState = {
    loading:false,
    cart:[],
    amount:0,
    total:0
}
const AppProvider = ({children})=>
{
    const [state,dispatch] = useReducer(Reducer,initialState);

const clearCart =()=>
{
    dispatch({type:'CLEAR_CART'})
}

const removeItem = (id)=>
{
    dispatch({type:'REMOVE_ITEM',payload:id})
}

const increaseAmount = (id)=>
{
    dispatch({type:'INCREASE_AMOUNT',payload:id})
}

const decreaseAmount = (id) =>
{
    dispatch({type:'DECREASE_AMOUNT',id:id})
}
const fetchData = async ()=> {
    dispatch({type:'LOADING'});
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({type:'DISPLAY_ITEMS',payload:cart})
}

useEffect(()=>
{
    fetchData()
},[])

// useEffect(()=>
// {
//     Axios.get(url).then((response)=>
//     {
//         dispatch({type:'LOADING'})
//         const cart = response.data;
//         dispatch({type:'DISPLAY_ITEMS',payload:cart})
//     })
// },[])

useEffect(()=>
{
    dispatch({type:'GET_TOTAL'});

},[state.cart]);

    return(
        <AppContext.Provider value={{
            ...state,clearCart,removeItem,increaseAmount,decreaseAmount
        }}
        >{children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>
{
    return useContext(AppContext);
}

export {AppContext, AppProvider}