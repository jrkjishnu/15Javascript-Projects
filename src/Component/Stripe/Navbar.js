import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import sublinks from './data';
const Navbar = () => {

 
const {openSidebar,openSubmenu,closeSubmenu} = useGlobalContext();
const display = (e)=>
 {
   const page = e.target.textContext;
   const tempBtn = e.target.getBoundingClientRect();
   const center = (tempBtn.left + tempBtn.right)/2;
   const bottom = tempBtn.bottom - 3;
   //console.log(e.target.textContent);
   openSubmenu(page,{center,bottom},e.target.textContent);

 }
 const handle = (e)=>
 {
   if(!e.target.classList.contains('link-btn'))
    closeSubmenu();
 }
return(
  <nav className ='nav' onMouseOver={handle}>
    <ul className="nav-links">
      <li>
        <button className="link-btn" onMouseOver={display}>
          Products
        </button>
      </li>
      <li>
        <button className="link-btn" onMouseOver={display}>Developers</button>
      </li>
      <li>
        <button className="link-btn" onMouseOver={display}>Company</button>
      </li>
    </ul>

  </nav>
)


}
export default Navbar;
