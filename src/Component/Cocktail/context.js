import React, { createContext, useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import data from './data';
const MyContext = React.createContext();
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppProvider = ({children})=>
{
    const [state,setValue] = useState(data);

    // useEffect(()=>
    // {
    //     Axios.get(url).then((res)=>
    //     {
    //         setValue(res.data);
    //         //console.log(res.data);
    //         //console.log("state",state);
    //     })
    // })
    return (<MyContext.Provider value={{
        state
    }}>{children}</MyContext.Provider>)



} 


export const useGlobalContext = ()=>
{
    return useContext(MyContext);
}

export {AppProvider,MyContext};

