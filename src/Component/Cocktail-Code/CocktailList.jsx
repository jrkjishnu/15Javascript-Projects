import React from 'react';
import Cocktail from './Cocktail';
import {useGlobalContext} from './Context';
import Loading from './Loading';

export default function CocktailList() {
    const {cockTail,loading} = useGlobalContext();
    if(cockTail.length < 1)
    {
        console.log(cockTail.length);
        return <h2>No Cocktail</h2>
        
    }
    if(loading)
        return <Loading />
    
    return ( 
        <section>
            {
                cockTail.map((item)=>
                {
                    return <Cocktail key={item.id} {...item} />
                })
            }
        </section>
    )
}
