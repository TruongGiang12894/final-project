import React from 'react';
import pic from './images.jpg'
import './style.css';

function Header({title}) {
    return (
        <div className='header'>
            <h3>{title}</h3>
            {window.location.href !== 'http://localhost:3000/dashboard' && <input className='search' placeholder='Search...'></input>}
            <div className='user'>
                <img src={pic} alt="avt" />
                <span>Some one name</span>
            </div>
        </div>
    );
}

export default Header;