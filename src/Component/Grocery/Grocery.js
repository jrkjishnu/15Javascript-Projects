import React, { useEffect, useState } from 'react'
import './grocery.css';
export default function Grocery() {

    const [values,setValues] = useState([]);
    const [add,setAdd] = useState();

    const valueSaving = (e)=>
    {
        setAdd(e.target.value);
    }

    const valueAdding = ()=>
    {
        values.push(add);
        setValues(values);
        setAdd();
    }
    const deleted = (key)=>
    {
        // let newList = values;
        // newList.splice(key,1);
        values.splice(key,1);
        setValues([...values]);
    }

    const Edit = (key)=>
    {
        values[key] = add;
        setAdd(values[key]);
    }

    useEffect(()=>
    {
        console.log("ren");
    },[values]);
    return (
        <div className="container">
            <h1>Grocery List</h1>
            <input type="text" onChange={valueSaving} placeholder="eg.Egg"/>
            <button onClick={valueAdding}>Submit</button>
            {
               values.map((item,key)=>
               {
                   console.log(item);
                   return(
                    <div className="lists">
                        <li>{item}</li>
                        <button onClick={()=>{Edit(key)}}>Edit</button>
                        <button onClick={()=>{deleted(key)}}>delete</button>
                    </div>
                   )
               })
            }
        </div>
    )
}
