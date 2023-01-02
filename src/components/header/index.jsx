import React from 'react';
import pic from './images.jpg';
import './style.css';

function Header({ title }) {
    return (
        <>
            <div className='header'>
                <h3>{title}</h3>
                <div className='user'>
                    <img src={pic} alt="avt" />
                    <span>Some one name</span>
                </div>
            </div>
            <div className="header-stich"></div>
        </>
    );
}

export default Header;