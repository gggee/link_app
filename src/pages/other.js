import React from 'react';
import './css/page_stl.css';
import image from './img/han-shatyr.jpg'
import dvores from './img/dvores.jpg'
import mechet from './img/mechet.jpg'
const Other_attraction = () => {
  return (
    <div className='container'>
      <h1>Other attractions</h1>
      <img src={image}></img>
      <p className='p_info'><b>«Khan Shatyr»</b></p>
      <p className='p_info'>Shopping and entertainment center built in 2010. The unusual design of the
        building resembles a huge tent spread among the endless Kazakh steppes. Inside there are shops,
        restaurants, office space, a family amusement park, a water park and a real beach resort
        with sea sand specially imported from the Maldives.</p> <br />
      <img src={dvores}></img>
      <p className='p_info'><b>«Palace of Peace and Reconciliation»</b></p>
      <p className='p_info'>A pyramid-shaped building located next to the Astana-Baiterek monument.
        It was erected in 2006 for the meetings of the international congress held in Astana, dedicated to world
        religions and religious tolerance. The building also has an opera hall, at the opening of which Montserrat
        Caballe herself sang. Today the palace is used for exhibitions, conferences and concerts.</p> <br />
      <img src={mechet}></img>
      <p className='p_info'><b>«Khazret Sultan Mosque»</b></p>
      <p className='p_info'>The main mosque of Astana, which ranks second in size in all of Central Asia 
      (the first is “Turkmenbashi Rukhy”). The capacity of the temple is up to 10 thousand people. It was built 
      in 2012 in the style of classical Islamic architecture. “Hazret Sultan” is a real work of urban art, 
      occupying a special place among the city’s attractions.</p> <br />
    </div>
  );
}

export default Other_attraction;
