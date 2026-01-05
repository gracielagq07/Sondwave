import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container" style={{ justifyContent: 'center', gap: '40px' }}>
    <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
      <img src="/images/landing-page-girl.png" alt="" style={{ width: '100%', maxWidth: '450px' }} />
    </div>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '4.5rem', margin: '0 0 20px 0', lineHeight: '1.1' }}>Feel The Music</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Stream over 20 thousand songs with one click</p>
      <Link to="/join" style={{ 
        backgroundColor: 'var(--button-bck)', color: 'white', padding: '15px 30px', 
        borderRadius: '5px', textDecoration: 'none', width: 'fit-content' 
      }}>Join Now</Link>
    </div>
  </div>
);

export default Home;