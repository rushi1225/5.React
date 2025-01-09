import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <h1>Page not Found</h1>
            <Link to='/'>Go Back Home</Link>
        </>
    )
}

export default NotFound
