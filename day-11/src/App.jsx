import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import Counter1 from './component/Counter1'
import Counter2 from './component/Counter2'
import Home from './component/Home'

function App() {
  const [count, setCount, Route] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='counter1' element={<Counter1></Counter1>}></Route>
          <Route path='counter2' element={<Counter2></Counter2>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
