import React, { useState } from 'react'
import './login.css'
const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")


    function handleSubmit(e) {
        e.preventDefault();

        console.log(username, password)



        const data = { username, password }

        fetch("https://todo-backend-two-bice.vercel.app/register",
            method = "POST",
            body.JSON.stringify(data),
            headers: {
            "Content-Type": "application/json",
        },
    };

    return (
        <>
            <div className='login'>
                <form>
                    <h1>Login</h1>

                    <input type="text" placeholder='User-name'
                    />
                    <br /><br />
                    <input type="password" placeholder='Password' />
                    <br /><br />
                    <button type='submit' onSubmit={(e) => handleSubmit()}> Login</button>
                </form>
            </div>
        </>
    )
}
export default Login
