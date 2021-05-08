import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'
import sublinks from './data';
const Submenu = () => {
  const {isSubmenuOpen,location,textValue,page:{page,links}} = useGlobalContext();
const subRef = useRef(null);

useEffect(()=>
  {
    const submenu = subRef.current;
    const {center,bottom} = location;
    //console.log("submenu"+submenu);
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

  },[location])

   return <aside className={`${isSubmenuOpen?'submenu show':'submenu'}`} ref={subRef}>


     {
       links.map((item,index)=>
       {
         return(
           <li key={index}>
             <a href={item.url}>{item.icon}{item.label}</a>
           </li>
         )
       })

     }
     {/* {
            sublinks.map((item,index)=>
            {
              const {page,links} = item;
              //console.log(index);
              if(page == textValue.toLowerCase())
              {
                return( 
                  links.map((item)=>
                  {
                    return(
                    <li>
                      <a href={item.url}>{item.icon}{item.label}</a>
                    </li>
                    )
                  })            
              )
              }
              
            })
          } */}
   </aside>
}

export default Submenu
