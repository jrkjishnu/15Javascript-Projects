import { useState } from 'react';
import './review.css';
import People from './data';

const Review =({Rdata,setRdata})=>
{
const change = (index,op)=>{
    console.log(index);
    if(op ==='+' || op==='-')
    {
        (index === 0 && op==='-')? index=People.length:index=index;
        (index === People.length-1 && op==='+')? index=-1:index=index;
        op === '+'? setIndex(index+1):setIndex(index-1);
    }
    else
    {
        setIndex(index);
    }
      
}
   const [index,setIndex] = useState(0);
   const {id,img,name,job,desc} = People[index];
   return <div className="container">
       <h1>User Review</h1>
       <img src={img} alt={name}/>
       <h2>{name}</h2>
       <h5>{job}</h5>
       <p>{desc}</p>
       <button onClick={()=>change(index,'-')}>{'<'}</button>
       <button onClick={()=>change(index,'+')}>{'>'}</button>
        <button onClick={()=>change(Math.floor(Math.random()*4))}>Surprice</button>
   </div>

}

export default Review;