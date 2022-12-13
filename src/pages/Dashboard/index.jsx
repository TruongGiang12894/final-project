import React from 'react';
import Header from '../../components/header';
import DisplayChart from '../../components/charts';
import Tags from '../../components/tags';
import OrdersList from '../../components/orderslist';
import FeedbackList from '../../components/feecbacklist';
import { title } from '../../constants/constants';
import './style.css';

function Dashboard() {
    return (
        <div className='dashboard'>
            <Header title={title.dashboard}/>
                <div className='charts-tags'>
                    <DisplayChart />
                    <Tags />
                </div>
                <div className='orders-feedbacks-table'>
                <OrdersList />
                <FeedbackList/>
                </div>
        </div>
    );
}
export default Dashboard;