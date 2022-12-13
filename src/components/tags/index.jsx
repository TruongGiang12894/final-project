import React from 'react';
import './style.css'
function Tags(props) {
    return (
        <div className='tags'>
            <div className='tag sales'>
                <h5>Sales</h5>
                <h3>10000$</h3>
                <h6><span>18%</span> Since last month</h6>
                {/* <div className='time-tracking'>
                    <span>This month</span>
                    <span>Total</span>
                </div> */}
            </div>
            <div className='tag orders'>
                <h5>Orders</h5>
                <h3>100</h3>
                <h6><span>8%</span> Since last month</h6>
                {/* <div className='time-tracking'>
                    <span>This month</span>
                    <span>Total</span>
                </div> */}
            </div>
            <div className='tag feedbacks'>
                <h5>Feedbacks</h5>
                <h3>2 </h3>
                <h6><span>2%</span> Since last month</h6>
                {/* <div className='time-tracking'>
                    <span>This month</span>
                    <span>Total</span>
                </div> */}
            </div>
            <div className='tag users'>
                <h5>Users</h5>
                <h3>20</h3>
                <h6><span>5%</span> Since last month</h6>
                {/* <div className='time-tracking'>
                    <span>This month</span>
                    <span>Total</span>
                </div> */}
            </div>
        </div>
    );
}

export default Tags;