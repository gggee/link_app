import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import City_image from './pages/photo_city';
import Famous_landmark from './pages/famous';
import Other_attraction from './pages/other';
import City_Info from './pages/index';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/info">Information about the city</Link></li>
            <li><Link to="/famous">Famous landmark</Link></li>
            <li><Link to="/other">Other attractions</Link> </li>
            <li><Link to="/imag">City image</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/info" element={<City_Info/>} />
          <Route path="/famous" element={<Famous_landmark />} />
          <Route path="/other" element={<Other_attraction />} />
          <Route path="/imag" element={<City_image />} />
        </Routes>
      </div>
    </Router>
  );
}
function Home() {
  return <h1 className='h1_page'>Welcome to Astana</h1>;
}

export default App;
