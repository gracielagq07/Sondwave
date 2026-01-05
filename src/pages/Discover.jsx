import React from 'react';

const Discover = () => (
  <div className="container" style={{ alignItems: 'center', gap: '50px', minHeight: '80vh' }}>
    <div style={{ flex: 1.5 }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Discover new music</h1>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', justifyContent: 'inherit' }}>
        <div className="icon-box">
          <img src="/images/microphone.svg" width="30" alt="" />
          <p>Charts</p>
        </div>
        <div className="icon-box">
          <img src="/images/albums.svg" width="30" alt="" />
          <p>Albums</p>
        </div>
        <div className="icon-box">
          <img src="/images/more.svg" width="30" alt="" />
          <p>More</p>
        </div>
      </div>
      <p>By joining you can benefit by listening to the latest albums released.</p>
    </div>
    <div style={{ flex: 1 }}>
    
      <img 
        src="/images/covers.jpg" 
        alt="Discover new music" 
        style={{ width: '100%', maxWidth: '380px' }} 
      />
    </div>
  </div>
);

export default Discover;