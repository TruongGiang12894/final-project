import React from 'react';
import Header from '../../components/header';
import { title } from '../../constants/constants';
import './style.css';


function Products() {
    return (
        <div className='products'>
            <Header title={title.products}/>
        </div>
    );
}

export default Products;