import React, { useContext } from 'react'
import { counterContext } from '../App'

const Counter1 = () => {
  // step 3
  const [count, setCount] = useContext(counterContext);

  return (
    <div className='bg-green-500 p-5 m-5'>
      <button onClick={() => setCount((count) => count + 1)}>counter 1</button>
    </div>
  )
}

export default Counter1
