import React from 'react'
import './index.css';
import {Link} from 'react-router-dom';
export default function Cocktail({id,name,img,info,glass}) {
    return (
        <article className='cocktail'>
             <div className='img-container'>
            <img src={img} alt="No" style={{ width:"200px", height:"200px",position:'relative',left:'800px',margin:'1rem'}}/>
            </div>
            <div className="cocktail-footer">
            <h3>{name}</h3>
            <h4>{glass}</h4>
            <p>{info}</p>
            <Link to={`/Cocktail/${id}`}><button>Details</button></Link>
            </div>
           
       
        </article>
       
    )
}
