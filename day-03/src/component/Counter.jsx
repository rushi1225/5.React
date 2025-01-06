import React from 'react'
import { useState } from "react"


const Counter = () => {

    // usestate
    const [counter, setCounter] = useState(0)


    // handle button
    function handleButton() {
        // old value 0 setcount set new value 2
        setCounter(2)
        // old value madhe +2 add krtoy
        setCounter(counter + 2)
    }


    return (
        <div>
            <h2>{counter}</h2>

            {/* same button write on two ways */}
            <button onClick={handleButton}> Handle button to increase</button>
            <br /> <br />

            <button onClick={() => handleButton()}>Handle button to increase</button>
        </div>
    )
}

export default Counter
