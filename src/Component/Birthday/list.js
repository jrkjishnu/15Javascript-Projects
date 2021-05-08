import { useState } from 'react';
import './list.css'

const List = ({value})=>
{
    const [show,setShow] = useState(true);

    const div = document.querySelector('div');
    const change = ()=>
    {
        setShow(false);
        div.className = 'invisible';
    }
    return(
        <div className="container">
{         show?<h2>{value.length} Birthdays Today</h2>:<h2>0 Birthdays Today</h2> }
            <ul>
                {
                    value.map((item,key)=>
                    { 
                        const {id,name,img,age} = item;
                         if(show)
                        {
                            return(
                                <div className="row">
                                    <img src={img} alt="No"/>
                                    <h4>{name}</h4>
                                    <h5>{age}</h5>
                                </div>
                               )
                        }                      
                    })
                  
                }
            </ul>
            <button onClick={change}>Clear All</button>
        </div>
    )
}


export default List;