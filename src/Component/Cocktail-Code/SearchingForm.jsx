import React, { useState } from 'react';
import Loading from './Loading';
import {useGlobalContext} from './Context';
export default function SearchingForm() {
    const {setSearchTerm,searchChange} = useGlobalContext();
    const[value,setValue] = useState();
    const searchValue = React.useRef('');
    const searchCocktail = ()=>
    {
        setSearchTerm(searchValue.current.value);
        //console.log(searchValue.current.value);
        setValue(searchValue.current.value);
    }
    return (
        <div>
            <input 
            type="text" 
            placeholder="Search..."
            id='name'
            ref={searchValue}
            onChange={(e)=>searchChange(e.target.value)}
            />
        </div>
    )
}
