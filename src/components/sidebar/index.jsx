import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from "react-icons";
import { AiOutlineAppstore, AiOutlineAreaChart, AiOutlineTeam, AiTwotoneApi } from 'react-icons/ai';
import './style.css';

function Sidebar(props) {
   return (
      <>
      
      <div className='sidebar'>
         <h2>LAP-STORE</h2>
         <IconContext.Provider value={{ size: '20', className: 'icon' }}>
            <ul className='sidebar-list'>
               <NavLink to={'admin/dashboard'}><li><AiOutlineAreaChart />Dash board</li></NavLink>
               <NavLink to={'admin/products'}><li><AiOutlineAppstore />Products</li></NavLink>
               <NavLink to={'admin/customers'}><li><AiOutlineTeam />Customers</li></NavLink>
               <NavLink><li><AiTwotoneApi />Log out</li></NavLink>
            </ul>
         </IconContext.Provider>
         </div>
         <div className='sidebar-stich'></div>
         </>
   );
}

export default Sidebar; 