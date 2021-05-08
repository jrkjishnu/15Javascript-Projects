import React,{useContext, useEffect, useState} from 'react';
import data from './data';

const AppContext = React.createContext();

export const AppProvider = ({children})=>
{


    const [value,setValue] = useState();
    //console.log("value="+value[0]);
    const [cart,setCart] = useState(data);
    useEffect(()=>
    {
        let newvalue = 0;
        cart.map((item)=>
        {
            newvalue+=item.amount;
        setValue(newvalue);
        console.log("vals"+value);
        })
    },cart)
console.log(value);
    const increase = (e,id)=>
    {
        //setCart(cart);
        const newarray = [...cart];
        cart.map((item)=>{
            if(item.id === id)
                {
                    item.amount = item.amount+1;
                }
        })
        
        //console.log(cart);
    }

    

    const decrease = (e,id)=>
    {
        cart.map((item)=>
        {
            if(item.id === id)
            {
                item.amount = item.amount - 1;
                if(item.amount < 0)
                    {
                       removeItem(id);
                    }
            }
        })
    }
    const removeItem = (id)=>
    {
        const newarray = cart.filter((item)=>item.id !== id);
        setCart(newarray);
        //console.log(cart);
    }

    const clearAll = ()=>
    {
        setCart([]);
        //console.log(cart);

    }

    return <AppContext.Provider value={{
        increase,value,cart,setCart,decrease,removeItem,clearAll,
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = ()=>
{
    return useContext(AppContext);
}