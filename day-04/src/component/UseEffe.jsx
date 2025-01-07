import React, { useState } from 'react'
import { useEffect } from 'react'



const UseEffe = () => {

    const [users, setUsers] = useState([]);
    // useEffect(() => {}, []);


    async function sendReq() {

        try {
            const res = await fetch('https://dummyjson.com/users')
            const data = await res.json();
            setUsers(data.users)
        }
        catch (error) {
            console.log("error")
        }
    }




    useEffect(() => {
        //mount
        sendReq()
    }, []);



    return (
        <>
            <h1>users</h1>

            {users.map((userData) => {
                return <li key={userData.id}>{userData.firstName}</li>
            })}
        </>
    )
}

export default UseEffe
