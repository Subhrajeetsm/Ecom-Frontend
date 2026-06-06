import { useState } from 'react';

function Header({ SetSearchquery }) {
  const [count, setCount] = useState(0);

  function toggleDarkMode() {
    document.body.classList.toggle('dark');
  }

  function handCount() {
    setCount(count + 1);
  }

  return (
    <>
      <input
        type="checkbox"
        onChange={toggleDarkMode}
        style={{ margin: '0 10px' }}
      />
      Toggle Dark Mode

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: '#f0f0f0',
        }}
      >
        <h2 style={{ margin: 0, color: 'black' }}>My Store</h2>

        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => SetSearchquery(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '75%',
          }}
        />

        <nav>
          <a href="#" style={{ margin: '0 2px' }}>
            Home
          </a>
          <a href="#" style={{ margin: '0 2px' }}>
            Details
          </a>
          <a href="#" style={{ margin: '0 2px' }}>
            About
          </a>
          <a href="#" style={{ margin: '0 2px' }}>
            Sign In
          </a>
          <a href="#" style={{ margin: '0 2px' }}>
            Sign Up
          </a>
        </nav>
      </div>

      <button onClick={handCount}>Count {count}</button>
    </>
  );
}

export default Header;