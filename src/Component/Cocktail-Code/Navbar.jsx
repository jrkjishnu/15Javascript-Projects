import React from 'react'
import {Link} from 'react-router-dom';
import './index.css'
export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-center">
            <Link to="/"><h3>CocktailDB</h3></Link>
            <ul className="nav-links">
                <li>
                <Link to="/home">Home</Link>
                </li>
                <li>
                <Link to='/about'>About</Link>
                </li>
            </ul>
                
            </div>
        </nav>
    )
}
