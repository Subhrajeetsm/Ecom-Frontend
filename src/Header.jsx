import { Link } from 'react-router-dom'

function Header({ setsearchquery }) {
  function togglemode() {
    document.body.classList.toggle('dark')
  }

  return (
    <header style={{ display: 'flex', justifyContent: 'space-around' }}>
      <img src="src/assets/vite.svg" alt="LOGO" />
      <input
        onChange={(e) => setsearchquery(e.target.value)}
        style={{ borderRadius: '10px', width: '33%' }}
        placeholder="search the products..."
        type="text"
      />
      <nav style={{ display: 'flex', gap: '10px' }}>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/products">PRODUCTS</Link>
        <Link to="/signup">signup</Link>
      </nav>
      <button onClick={togglemode}>dark/light</button>
    </header>
  )
}

export default Header