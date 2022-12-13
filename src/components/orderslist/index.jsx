import React from 'react';
import './style.css';
import Order from '../order';

function OrdersList(props) {
    return (
        <div className='orders-list-table'>
            <div className='title-order-list'>
                <h4>Recently oders</h4>
                <h6>View all</h6>
            </div>
            <div className='orders-list-header'>
                <h4 className='th-customers'>Customers</h4>
                <h4 className='th-time'>Time</h4>
                <h4 className='th-status'>Status</h4>
            </div>
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
        </div>
    );
}

export default OrdersList;