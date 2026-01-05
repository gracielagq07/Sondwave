import React from 'react';

const Join = () => (
  <div className="container" style={{ justifyContent: 'space-between', alignItems: 'center', minHeight: '80vh' }}>
    <h1 style={{ fontSize: '4.5rem' }}>
      Join the <span style={{ color: 'var(--accent-text)' }}>fun.</span>
    </h1>
    <div style={{ backgroundColor: 'var(--secondary-bg)', padding: '40px', borderRadius: '20px', width: '100%', maxWidth: '400px' }}>
      
      <div style={{ marginBottom: '20px' }}>

        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
        <input 
          id="name" 
          type="text" 
          style={{ width: '100%', padding: '10px', background: 'transparent', border: '1px solid var(--border-input)', borderRadius: '5px', color: 'white' }} 
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
        <input 
          id="email" 
          type="email" 
          style={{ width: '100%', padding: '10px', background: 'transparent', border: '1px solid var(--border-input)', borderRadius: '5px', color: 'white' }} 
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
        <input 
          id="password" 
          type="password" 
          style={{ width: '100%', padding: '10px', background: 'transparent', border: '1px solid var(--border-input)', borderRadius: '5px', color: 'white' }} 
        />
      </div>

      <button style={{ width: '100%', padding: '12px', backgroundColor: 'var(--button-bck)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Join Now
      </button>
      
    </div>
  </div>
);

export default Join;