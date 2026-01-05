import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header style={{ width: '100%', position: 'absolute', top: 0 }}>
    <nav className="container" style={{ justifyContent: 'space-between', padding: '20px', alignItems: 'center', flexDirection: 'row' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white' }}>
        <img src="/images/logo.svg" alt="" width="35" />
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>SoundWave</span>
      </Link>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/discover" style={{ color: 'white', textDecoration: 'none' }}>Discover</Link>
        <Link to="/join" style={{ color: 'white', textDecoration: 'none' }}>Join</Link>
      </div>
    </nav>
  </header>
);

export default Navbar;