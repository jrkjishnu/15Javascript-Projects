import React, { useContext } from 'react'
import {useGlobalContext} from './sideContext';
import './sidebar.css';

export default function SideHome() {

    const {openModal,openSidebar} = useGlobalContext();
    return (
        <main>
        <button className='sidebar-toggle' onClick={openSidebar}>Click
        </button>
        <button className='btn' onClick={openModal}>
          show modal
        </button>
      </main>
    )
}
