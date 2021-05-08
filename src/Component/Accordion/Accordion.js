//import {Card,Button} from 'react-bootstrap';
import { useState } from 'react';
import './Accordion.css';
import Adata from './Adata';
function Accordion()
{
    const [show,setShow] = useState(false);
    // const change = (e,key)=>
    // {
    //     //console.log(show[key]);
    //    show.map((item,key1)=>
    //     {
    //         if(key == key1)
    //             show[key] = true;
    //         else
    //             show[key1] = false;
    //     })
    //     //console.log(show[key]);
    //     setShow(show);
    // }
    const toggle = key=>
    {
        if(show === key)
        {
            return setShow(false);
        }
        setShow(key);
    }
    return(
        <div className="container">
            <section className="sec1">

                    {
                Adata.map((item,index)=>
                {
                    const {qn,ans} = item;
                    return <>
                    <article>
                    <h2>{qn}</h2>
                    <button onClick={()=>toggle(index)} key = {index}>+</button>
                    {show === index ?<p>{ans}</p>:null}
                    {console.log(show[1])}
                    </article><br />
</>
                })
               
            }
        </section>
        </div>

    )
}

export default Accordion;