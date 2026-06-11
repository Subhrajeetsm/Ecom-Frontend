import Header from './header'
import About from './About'
import { Route, Routes,  } from 'react-router-dom'
import Products from './Products'
import Signup from './Signup'
import { useState } from 'react'
import './App.css'

function App() {
  const [searchquery, setsearchquery] = useState('')

  return (
    <>
      <Header setsearchquery={setsearchquery} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/"
          element={
           
              <Products searchquery={searchquery} />
           
          }
        />
        <Route
          path="/products"
          element={
            
              <Products searchquery={searchquery} />
          }
        />

        <Route path='/signup'  element={<Signup/>} />
      </Routes>
    </>
  )
}

export default App