import React from 'react';
import Header from '../../components/header';
import { title } from '../../constants/constants';
import './style.css';


function Customers() {
    return (
        <div className='customers'>
            <Header title={title.customers}/>
        </div>
    );
}

export default Customers;