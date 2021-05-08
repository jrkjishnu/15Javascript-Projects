import React, { useEffect, useState } from 'react'
import data from './data';
import Items from './item';
import {useGlobalContext} from './Context';
export default function ListCart() {
    let tot = 0,amt = 0;
    const {increase,value,cart,setCart,decrease,removeItem,clearAll} = useGlobalContext();
    const [total,setTotal] = useState(0);
    const [camt,setAmount] = useState(0);
    return (
        <div>
            <h4>Cart = {value}</h4>
        <div>
            
            <ul>
                {
                    cart.map((item,index)=>
                    {
                        console.log(cart.length);
                        // if(cart.length === 0)
                        //     return <h3>No items in the cart</h3>
                        //console.log(item,index);
                        const {img,id,title,price,amount} = item;
                        amt = amt + amount;
                        tot = tot + (amount * price);
                        console.log("total"+tot);
                        return(
                            <ul key={id}>
                                <img src={img} alt="No" height='100px' width='100px'/>
                                <h4>{title}</h4>
                                <button id={id} onClick={(e)=>{
                                    decrease(e,id);
                                    setAmount(amt);
                                }}
                                    >{'<'}</button>
                                <p>{amount}</p>
                                <button id={id} onClick={(e)=>{
                                    increase(e,id)
                                    setAmount(amt);
                                    
                                    }}>{'>'}</button>
                                <h4>{price}</h4>
                                <button id={id}onClick={()=>removeItem(id)}>Remove</button>
                            </ul>
                        )
                    })
                }
            </ul>
         {cart.length!==0 ? <h3>Total = {tot}</h3> &&
            <button onClick={clearAll}>Clear All</button>:<h3>Cart Empty</h3>}
        </div>
        </div>

    )
}
