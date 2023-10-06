import React from 'react';
import './css/page_stl.css';
import image from './img/bayterek.jpg'

const Famous_landmark = () => {
  return (
    <div className='container'>
      <h1>Most famous landmark</h1>
      <img src={image}></img>
      <p className='p_info'><b>Monument "Astana-Baiterek"</b></p>
      <p className='p_info'>Everything about it is beautiful and symbolic: the height is 97 m (with the ball - 105 m), 
      and the golden sun in the crown, and the internal content - the monument is divided into three zones, 
      personifying the three foundations of the universe.
      Nursultan Nazarbayev once said that <i>a person who climbs to the top of Baiterek gets an amazing opportunity 
      to become saturated with the spirit of the Kazakh steppes.</i></p>
      <p className='p_info'><b>“Baiterek”</b> was conceived and implemented with a special meaning and philosophical 
      significance. According to the legends of ancient nomads, the Ishim River symbolizes the World River, 
      and on its left bank stands the Tree of Life, the role of which is played by “Baiterek”.</p>
    </div>
  );
}

export default Famous_landmark;
