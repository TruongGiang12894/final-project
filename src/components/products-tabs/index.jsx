import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

function ProductsTab() {

    return (
        <div className='tabs'>
            <NavLink to={'overview'} ><div className='tab'>Over view</div></NavLink>
            <NavLink to={'createnew'} ><div className='tab'>Create new</div></NavLink>
            <NavLink to={'detail'} ><div className='tab'></div></NavLink>
            
        </div>
    );
}

export default ProductsTab;