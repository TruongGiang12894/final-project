import React from 'react';
import './style.css';

function Buttons(props) {
    const { buttonName, buttonSize, marGin, onClick } = props;

    return (
        <div onClick={onClick} className='buttons' style={{margin :`${marGin}`}}>
            {buttonSize === 'small' && <h6>{buttonName}</h6>}
            {buttonSize === 'medium' && <h5>{buttonName}</h5>}
        </div>
    );
}

export default Buttons;