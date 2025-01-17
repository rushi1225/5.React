import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <br />
                <Link to="/about">About</Link>
                <br />
                <Link to="/single-user">Single User</Link>
                <Link to="/single-user/1">Single User 1</Link>
                <Link to="/single-user/2">Single User 2</Link>
            </div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
