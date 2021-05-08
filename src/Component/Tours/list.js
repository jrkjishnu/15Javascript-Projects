import React, { useState } from 'react';
import './list.css';
import ReactReadMoreReadLess from "react-read-more-read-less";


const List = ({tour,setTours,abc})=>
{
    const [show,setShow] = useState(false)

    const deletes = (id)=>
    {
        if(tour.length === 1)
            setShow(true);
        let array = tour.filter(function(e)
        {
            return (e.id!==id);
        })
        setTours(array);
       
        
    }

    const refresher = ()=>
    {
        setTours(abc);
        console.log(tour);
        console.log(abc);
        setShow(false);

    }
    return(
        <div className="cont">
        <h2>Tours</h2>
{show?<button onClick={refresher}>Refresh</button>:null}
        {
            tour.map((item,key)=>
            {
                if(tour.length > 0)
                {
                    const {id,img,name,desc,price} = item;
                return(
                <div className="container">
                    <img src={item.img} alt={name} width='500px' height='300px'/>
                    <h4>{name}</h4>
                    <h4>{price}</h4>
                    <ReactReadMoreReadLess
                        charLimit={75}
                        readMoreText={"Read more ▼"}
                        readLessText={"Read less ▲"}
                        readMoreClassName="read-more-less--more"
                        readLessClassName="read-more-less--less"
                    >
                        {desc}
                    </ReactReadMoreReadLess><br />
                    <button onClick={()=>{deletes(id)}}>Not Interested</button><br/>
                </div>
                )
                }
            })
        }
         </div>
       
        
    )
}

export default List;