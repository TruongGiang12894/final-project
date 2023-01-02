import React from 'react';
import './style.css';
import Order from '../order';
import Buttons from '../common/smallbuttons';

function OrdersList(props) {
    return (
        <div className='orders-list-table'>
            <div className='title-order-list'>
                <h4>Recently oders</h4>
                <Buttons buttonName='View all' buttonSize='small' marGin='0px 20px'/>
            </div>
            <div className='orders-list-header'>
                <h4 className='th-customers'>Customers</h4>
                <h4 className='th-time'>Time</h4>
                <h4 className='th-status'>Status</h4>
            </div>
            <div className='orders-list-body'>
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
            </div>
        </div>
    );
}

export default OrdersList;