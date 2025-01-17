import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SingleUser from './pages/SingleUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <h1>Header</h1>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="single-user/:id" element={<SingleUser></SingleUser>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
