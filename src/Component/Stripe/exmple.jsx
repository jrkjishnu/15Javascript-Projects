import React, { useState } from 'react'

export default function Exmple() {
    const [show,setShow] = useState(false);
    return (
        <div>
            <h1 onMouseOver={()=>setShow(!show)}>abcd</h1>
            {show?<li className="submenu show">
                <a href="ds">submenu</a>
            </li>:null}
        </div>
    )
}
