import React from 'react';
import './style.css';

function Order(props) {
    return (
        <div className='order'>
            <div className='td-customer'>Customer 1</div>
            <div className='td-time'>10:02:22 - 12/12/2022</div>
            <div className='td-status'>New</div>
        </div>
    );
}

export default Order;