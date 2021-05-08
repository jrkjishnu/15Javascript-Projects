import React, { useState } from 'react'
import './sidebar.css'
import {useGlobalContext } from './sideContext';

export default function Side() {

    const {closeModal,isModalOpen} = useGlobalContext();

    const [show,setShow] = useState(false);
    return (
        <div className={`${isModalOpen?'modal-overlay show-modal':'modal-overlay'}`}>
            <div className="modal-container">
        <h3>Model Context</h3>
        <button className='close-modal-btn' onClick={closeModal}>X</button>
        </div>
        </div>
    )
}
