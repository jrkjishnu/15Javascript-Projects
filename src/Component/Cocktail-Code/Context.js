import React, { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
const url='https://thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({children})=>
{
    const [searchTerm,setSearchTerm] = useState('a');
    const [cockTail,setCocktail] = useState([]);
    const [loading,setLoading] = useState(true);
    const searchChange = (value)=>
    {
        //console.log(value);
        setSearchTerm(value);
        console.log(searchTerm);
    }

    useEffect(useCallback(()=>
    {
        //console.log(searchTerm);
        axios.get(`${url}${searchTerm}`).then((res)=>
        {
            try
            {
                setLoading(true);

                const {drinks} = res.data;
                if(drinks)
                {
                    setLoading(false);
                    const newCocktail = drinks.map((item)=>
                    {
                        const {idDrink,strDrink,strAlcoholic,strCategory,strGlass,strDrinkThumb}= item;
                        return {
                            id:idDrink,name:strDrink,info:strAlcoholic,category:strCategory,glass:strGlass,img:strDrinkThumb
                            }
                    })           
            setCocktail(newCocktail);
            //console.log(cockTail);
                }
                
            }
            catch(err)
            {
                console.log(err);
            }
            
        })
    }),[searchTerm])
  

    return (<AppContext.Provider value={{
        searchTerm,setSearchTerm,cockTail,loading,searchChange
    }}>{children}</AppContext.Provider>)

}

export const useGlobalContext = ()=>
{
    return useContext(AppContext);
}

export {AppContext,AppProvider};