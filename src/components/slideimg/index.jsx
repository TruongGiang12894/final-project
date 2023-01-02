import React, { useState } from 'react';

import './style.css';
import pic1 from '../../images/lap1.png';
import pic2 from '../../images/lap2.PNG';
import pic3 from '../../images/lap3.PNG';
import pic4 from '../../images/lap4.PNG';

function Slideimg(props) {
    const [img, setimg] = useState(pic1)
    const imgset = [pic1, pic2, pic3, pic4]
    
    return (
        <div className='slide-img'>
            <img src={img} alt="lap1" className="imgmain" />
            {imgset.map((item, idx) => {
                   return (<img onClick={() => setimg(item)} key={idx} src={item} alt="lap1" className="imggallery" />)
                })}
        </div>
    );
}

export default Slideimg;