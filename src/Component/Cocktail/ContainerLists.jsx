import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {useGlobalContext} from './context';
import {Link} from 'react-router-dom';
export default function ContainerLists() {

    const {state} = useGlobalContext();
    const [searchItem,setSearch] = useState('');
const [value,setValue] = useState();
    //let key = Object.keys(state);
    return (
        
        <div>
            <Link to='/about'>Dtails</Link>
            {/* <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Search...'/>
            {
                state.filter((item)=>
                {
                    if(searchItem === '')
                        return item
                    else if(item.title.toLowerCase().includes(searchItem.toLocaleLowerCase()))
                        return item.title
                }).map((item,key)=>
                {
                    return(
                        <p>{item.title}</p>
                    )
                })
            } */}
           <h2>ContainerList</h2>
        </div>
    )
}
