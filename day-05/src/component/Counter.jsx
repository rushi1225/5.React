import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)


    function increseCount() {
        // setCount(count + 1)
        setCount(prev => prev + 1)
    }

    return (
        <>
            <h1>Counter</h1>
            <h2>counr is {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={increseCount}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}

export default Counter
