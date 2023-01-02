import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../components/header';
import ProductsTab from '../../components/products-tabs';
import { title } from '../../constants/constants';
import './style.css';


function Products() {

    return (
        <div className='products'>
            <Header title={title.products} />
            <div className='content'>
                <ProductsTab />
                <Outlet />
            </div>
        </div>
    );
}

export default Products;