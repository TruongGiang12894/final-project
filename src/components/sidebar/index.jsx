import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { AiOutlineAppstore, AiOutlineAreaChart, AiOutlineTeam, AiTwotoneApi } from 'react-icons/ai';
import './style.css';

function Sidebar(props) {
    return (
        <div className='sidebar'> 
            <h2>LAP-STORE</h2>
            <IconContext.Provider value={{color:'white',size:'20', style: { verticalAlign:'bottom', marginRight:'10' }}}>
            <ul className='sidebar-list'>
                <Link to={'dashboard'}><li><AiOutlineAreaChart />Dash board</li></Link>
                <Link to={'products'}><li><AiOutlineAppstore />Products</li></Link>
                <Link to={'customers'}><li><AiOutlineTeam/>Customers</li></Link>
                <Link><li><AiTwotoneApi/>Log out</li></Link>
            </ul>
            </IconContext.Provider>
        </div>
    );
}

export default Sidebar; 