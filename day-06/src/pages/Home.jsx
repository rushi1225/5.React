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
                <Link to="/contact">Contact</Link>
            </div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
