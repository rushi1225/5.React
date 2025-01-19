import { createContext, useState } from 'react'
import './App.css'
import Counter1 from './component/Counter1'
import Counter2 from './component/Counter2'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className='flex text-center h-screen flex-col justify-center'>
//         <h1>count is {count}</h1>
//         <Counter1 setCount={setCount}></Counter1>
//         <Counter2 setCount={setCount}></Counter2>
//       </div>  
//     </>
//   )
// }




// useContext
// step1

export const counterContext = createContext();


function App() {
    const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex text-center h-screen flex-col justify-center'>
        <h1>count is {count}</h1>
        {/* step 2  */}
        <counterContext.Provider value={[count, setCount]}>
          <Counter1 setCount={setCount}></Counter1>
          <Counter2 setCount={setCount}></Counter2>
        </counterContext.Provider>

      </div>
    </>
  )
}





export default App
