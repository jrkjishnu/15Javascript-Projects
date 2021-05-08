import React, { useEffect, useState } from 'react'
import {useParams,Link} from 'react-router-dom';
import axios from 'axios';
export default function SingleCocktail() {

    const {id} = useParams();
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const [cocktail,setCocktail] = useState([]);
    useEffect(()=>
    {
        axios.get(url).then((response)=>
        {
            const {drinks} = response.data;
          const newCocktail = drinks.map((item)=>
            {
                const {idDrink,strDrink,strAlcoholic,strCategory,strGlass,strDrinkThumb}= item;
                return {
                    id:idDrink,name:strDrink,info:strAlcoholic,category:strCategory,glass:strGlass,img:strDrinkThumb
                    }            })
                    setCocktail(newCocktail);
        })
    },[id])
    if(cocktail.length < 1)
        return <h2>Loading...</h2>
    return (
        <div>
            <Link to="/" ><button>Go Back</button></Link>
             {
                 cocktail.map((item)=>
                 {
                     const {id,name,info,category,glass} = item;
                     return(
                         <section>
                            <img src={item.img} alt="No" style={{width:'200px',height:'200px',position:'relative',left:'800px',margin:'1rem'}}/>
                            <h3>Name     : {name}</h3>
                            <h4>Category : {category}</h4>
                            <h5>Info     : {info}</h5>
                            <h5>Glass    : {glass}</h5>
                         </section>
                     )
                 })
             }
        </div>
    )
}
