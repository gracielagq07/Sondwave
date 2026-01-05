import React from 'react';

const Footer = () => (
  <footer style={{ backgroundColor: 'var(--secondary-bg)', padding: '20px 0', marginTop: 'auto' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 'auto' }}>
      
      <div style={{ display: 'flex', gap: '30px' }}>
        <span style={{ cursor: 'pointer' }}>About Us</span>
        <span style={{ cursor: 'pointer' }}>Contact</span>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <img src="/images/twitter.svg" alt="Twitter" width="20" />
          <span>Twitter</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <img src="/images/facebook.svg" alt="Facebook" width="20" />
          <span>Facebook</span>
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;