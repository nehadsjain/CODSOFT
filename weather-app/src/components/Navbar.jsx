import React from 'react';

function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">WeatherNow</div>
      <div className="nav-links">
        <button onClick={() => scrollTo('features')} className="nav-link">Features</button>
        <button onClick={() => scrollTo('weather-search')} className="nav-link">Search</button>
        <button onClick={() => scrollTo('preview')} className="nav-link">Preview</button>
      </div>
    </nav>
  );
}

export default Navbar;
