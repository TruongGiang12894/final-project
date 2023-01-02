import React from 'react';
import './style.css';

function Buttons({buttonName, buttonSize, marGin}) {
    return (
        <div className='buttons' style={{margin :`${marGin}`}}>
            {buttonSize === 'small' && <h6>{buttonName}</h6>}
            {buttonSize === 'medium' && <h5>{buttonName}</h5>}
        </div>
    );
}

export default Buttons;