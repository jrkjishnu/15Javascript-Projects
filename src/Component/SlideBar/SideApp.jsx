import React from 'react'
import SideContext from './sideContext'
import SideHome from './SideHome'
import Side from './sideModal'
import './sidebar.css';
import SideBar from './SideBar';
export default function SideApp() {
    return (
        <div>
            <SideHome />
            <Side />
            <SideBar />
        </div>
    )
}
