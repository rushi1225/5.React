import React, { useContext } from 'react'
import { counterContext } from '../App'

// import React from 'react'


const Counter2 = () => {
    const [count, setCount] = useContext(counterContext);
  
  return (
    <div className='bg-red-500 p-5 m-5'>
      <button onClick={() => setCount((count) => count + 1)}>counter 2</button>
    </div>
  )
}

export default Counter2
