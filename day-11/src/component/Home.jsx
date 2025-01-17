import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

const Home = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3031/users')
            .then((res) => res.json())
            .then((data) => setUsers(data.users))
    }, []);


    return (
        <div>
            <h1>Home Show users </h1>

            {users.map((users) => {
                return (
                    <li key={users.id}>{users.name}</li>
                )
            })}
        </div>
    )
}

export default Home
