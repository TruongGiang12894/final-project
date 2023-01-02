import React from "react";
import "./style.css";
import Feedback from "../feedback";
import Buttons from "../common/smallbuttons";

function FeedbackList(props) {
    return (
        <div className="feedbacks-list-table">
            <div className="title-feedback-list">
                <h4>Recently feedbacks</h4>
                <Buttons buttonName="View all" buttonSize="small" marGin="0px 20px"/>
            </div>
            <div className="feedbacks-list-header">
                <h4 className="th-customers">Customers</h4>
                <h4 className="th-status">Status</h4>
            </div> 
            <div className="feedbacks-list-body">
                <Feedback />
                <Feedback />
                <Feedback />
                <Feedback />
                <Feedback />
                <Feedback />
                <Feedback />
                <Feedback />
            </div>
        </div>
    );
}

export default FeedbackList;
