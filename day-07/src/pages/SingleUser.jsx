import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleUser = () => {

    const { id } = useParams()
    const [user, setUser] = useState([]);
    useEffect(
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data.user)
)

return (
    <>
        <h1>User id is {id}</h1>
        {user && <h2>{user.firstName}</h2>}
    </>
)
}

export default SingleUser
