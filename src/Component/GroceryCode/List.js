import React from 'react'
import './list.css';
export default function List({items,removeItem,editItem}) {
    return (
        <div>
            {
                items.map((value,key)=>
                {
                    const {id,title} = value;
                    return <article key={id}>
                        <p>{title}</p>
                        <button onClick={()=>editItem(id)}>Edit</button>
                        <button onClick={()=>removeItem(id)}>Delete</button>
                    </article>
                })
            }
        </div>
    )
}
