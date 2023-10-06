import React from 'react';
import './css/page_stl.css';
import img_1 from './img/ast_1.jpeg'
import img_2 from './img/ast_2.jpg'
import img_3 from './img/ast_3.webp'
import img_4 from './img/ast_4.jpg'

const City_image = () => {
  return (
    <div className='container'>
        <h1>Photos of the city</h1>
        <img src={img_1} className='img_city' />
        <img src={img_2} className='img_city' />
        <img src={img_3} className='img_city' />
        <img src={img_4} className='img_city' />
    </div>
  );
}

export default City_image;
