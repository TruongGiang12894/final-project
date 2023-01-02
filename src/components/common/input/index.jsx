import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addInfo } from '../../../redux/reducers/productSlice';

import './style.css';

function Input(props) {
    const { title,name, mess, type, value, focus, validfield, handleChange } = props;

    return (
        <div className='input-wrapper'>
            <label htmlFor={name}>{title}</label>
            <span>{mess}</span>{validfield && <span className='validate'>&nbsp;&nbsp;*Can not empty</span>}<br />
            {type ?
                <input onChange={handleChange} name={name} value={value} type={type} placeholder={`Nhập ${title}...`}  autoFocus={focus} /> :
                <textarea onChange={handleChange} name={name} value={value} placeholder={`Nhập ${title}...`}  autoFocus={focus} rows='3'></textarea>}
        </div>
    );
}

export default Input;