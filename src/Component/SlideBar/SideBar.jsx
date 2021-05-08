import React from 'react'
import {links} from './data';
import {useGlobalContext} from './sideContext';
export default function SideBar() {

    const {closeSidebar,isSideOpen} = useGlobalContext();

    return (
        <aside className={`${isSideOpen?'sidebar show-sidebar':'sidebar'}`}>
            <div className='sidebar-header'>
                <h1 className='logo'>Coding</h1>
                <button className='close-btn' onClick={closeSidebar}>X</button>
            </div>
            <ul className='links'>
                {
                    links.map((item)=>
                    {
                        const {id,text,url} = item;
                        return(
                            <li key={id}>
                                <a href={url}>{text}</a>
                            </li>
                        );
                    })
                }
            </ul>
        </aside>
    );
};
