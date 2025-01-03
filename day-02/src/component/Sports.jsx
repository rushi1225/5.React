// rafce 
//ES7 react extension

import React from 'react'


const sports = ["kabbadi", "criket", "tennies", "hollyball"]

const newArray = sports.map((sportsData) => {
    return <li key={sportsData}>{sportsData}</li>
})

const Sports = (props) => {
    return (

        <>
            <ul>{newArray}</ul>
           
        </>
    )
}

export default Sports


