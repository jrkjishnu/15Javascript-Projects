import React, { useState } from 'react'
import data from './data';
export default function Slider() {

    const [index1,setIndex] = useState(0);
    console.log(data);


    const slides = (index,op)=>
    {
        if(index === undefined)
        {
            if(index1 === data.length-1)
                setIndex(0);
            else
                setIndex(index1+1);
        }
          
            else
            {
                if(op === '+')
                (op === '+' && index === data.length-1)?setIndex(0):setIndex(index+1);
                else
                (op === '-' && index === 0)?setIndex(data.length-1):setIndex(index-1);
            }
       

       

    }
    return (
              
        
        <div>
            <h1>Review</h1>
            <img src={data[index1].img} alt="No" width='400px' height='400px'/>
            <h2>{data[index1].name}</h2>
            <button onClick={()=>{slides(index1,'-')}}>{'<'}</button>
            <button onClick={()=>{slides(index1,'+')}}>{'>'}</button>
            {setTimeout(slides,3000)}
        </div>
    )
}
