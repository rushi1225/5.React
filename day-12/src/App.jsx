
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment } from './slices/counterSlice'

function App() {

  // step 1  to access
  const counter = useSelector((state) => state.counter);
  // step 2 to dispatch

  const dispatch = useDispatch()


  return (
    <>
      <h1>counter is {counter} </h1>
      <button onClick={() => dispatch(increment())}>click me</button>
    </>
  )
}

export default App
