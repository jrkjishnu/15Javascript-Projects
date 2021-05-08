import React, { useState } from 'react'
import data from './data';

export default function Lorem() {
    let temp = 5;
    const [value,setValue] = useState(0);
    const [index,setIndex] = useState(0);
    const change = (e)=>
    {
        temp = e.target.value; 
    }

    const generate = ()=>
    {
        setValue(temp);
    }
    return (
        <div>
            <h2>Lorem Content</h2>
            <label>Enter Value <input type="text" onChange={change} style={{textAlign:'center'}}/></label>
           <button onClick={generate}>Generate</button>
            {
                data.map((item)=>
                {
                    //console.log(value);
                    if(data.indexOf(item) < value)
                    {
                        return <p>{item}</p>
                    }
                    if(data.indexOf(item) === 0)
                        return <p>{data[0]}</p>
                        
                })
            }
        </div>
    )
}
