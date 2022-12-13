import React from 'react';
import './style.css';
import Feedback from '../feedback';

function FeedbackList(props) {
    return (
        <div className='feedbacks-list-table'>
            <div className='title-feedback-list'>
                <h4>Recently feedbacks</h4>
                <h6>View all</h6>
            </div>
            <div className='feedbacks-list-header'>
                <h4 className='th-customers'>Customers</h4>
                <h4 className='th-status'>Status</h4>
            </div>
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
        </div>
    );
}

export default FeedbackList;