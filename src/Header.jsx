import { useState } from "react";
import "./Header.css";

function Header({ SetSearchquery }) {
  const [count, setCount] = useState(0);

  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }

  function handCount() {
    setCount(count + 1);
  }

  return (
    <>
      <div className="top-bar">
        <label>
          <input
            type="checkbox"
            onChange={toggleDarkMode}
            style={{ marginRight: "8px" }}
          />
          Dark Mode
        </label>
      </div>

      <header className="header">
        <h2 className="logo">S-Mart</h2>

        <input
          type="text"
          placeholder="🔍 Search products..."
          onChange={(e) => SetSearchquery(e.target.value)}
          className="search-box"
        />

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Details</a>
          <a href="#">About</a>
          <a href="#">Sign In</a>
          <a href="#">Sign Up</a>
        </nav>
      </header>

      <div className="count-container">
        <button className="count-btn" onClick={handCount}>
          Count {count}
        </button>
      </div>
    </>
  );
}

export default Header;