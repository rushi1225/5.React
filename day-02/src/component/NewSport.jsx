import React from 'react'
const sport = ["kho-kho", "kadaddi"]
const NewSport = () => {
    return (
        <div>
            <ul>
                {sport.length === 0 ? (
                    <li>no element in sport array</li>
                ) : (
                    sport.map((sport) => {
                        return <li>{sport}</li>
                    })
                )}
            </ul>
        </div>
    )
}

export default NewSport
