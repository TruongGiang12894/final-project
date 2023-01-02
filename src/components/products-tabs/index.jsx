import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './style.css';

function ProductsTab({pathName}) {
    const path = useSelector((state) => state.productlist.path)
    console.log(path);
    return (
        <div className='tabs'>
            <NavLink to={'overview'} ><div className='tab'>Over view</div></NavLink>
            <NavLink to={'createnew'}><div className='tab'>Create new</div></NavLink>
            {path &&  
                <div className='tab active'>Details</div>}
        </div>
    );
}

export default ProductsTab;