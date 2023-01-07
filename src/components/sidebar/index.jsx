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
            <div className='sidebar-list'>
               <NavLink to={'admin/dashboard'}><div className='sidebar-tab'><AiOutlineAreaChart />Dash board</div></NavLink>
               <NavLink to={'admin/products'}><div className='sidebar-tab'><AiOutlineAppstore />Products</div></NavLink>
               <NavLink to={'admin/customers'}><div className='sidebar-tab'><AiOutlineTeam />Customers</div></NavLink>
               <NavLink to={'admin/logout'}><div className='sidebar-tab'><AiTwotoneApi />Log out</div></NavLink>
            </div>
         </IconContext.Provider>
         </div>
         <div className='sidebar-stich'></div>
         </>
   );
}

export default Sidebar; 