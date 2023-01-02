import React from 'react';
import { CiSearch } from 'react-icons/ci';

import './style.css';

function Search(props) {
    return (
        <div className='wrap-search'>
                <input className='search' placeholder='Search...' />
                <CiSearch style={{ verticalAlign: 'middle', marginLeft: '-25px' }} />
        </div>
    );
}

export default Search;