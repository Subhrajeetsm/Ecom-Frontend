import { useState } from 'react';
import './App.css';

import Header from './Header';
import Signin from './signin';
import Signup from './singup';
import Products from './Products';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Header SetSearchquery={setSearchQuery} />

      <h1>My Store</h1>

      <Routes>
        <Route
          path="/"
          element={<Products Searchquery={searchQuery} />}
        />
<Route
  path="/signin"
  element={<Signin />}
/>

<Route
  path="/signup"
  element={<Signup />}
/>
      </Routes>
    </>
  );
}

export default App;