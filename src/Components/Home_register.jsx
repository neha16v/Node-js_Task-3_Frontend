import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home_register = () => {
    const [username, setUsername] = useState("");
    const nav=useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userdata, setUserdata] = useState([]);
    const [token] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU0NzEwYTg2YTVhZDdiMDkwZjViNzMiLCJpYXQiOjE3MDAwMzI4NDh9.CKto3zEmw57tzDp87DkFInM4rr6MPENYjjDEoQob9pw");  // Replace with your actual token

    const headers = {
        Authorization: token,
        "Content-type": "application/json",
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:4000/api/user/register",
                { username, email, password },
                { headers }
            );
            setUserdata([response.data]);
            console.log(response.data);
            if(response.status==200){
                alert("Registered succesfully")
            }else if(response.data.message === "User already exists"){
                alert("User already exists")
            }
        } catch (err) {
            console.error(err);
        }
    };

    const login=()=>{
        nav("/login")
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <h1>Username:</h1>
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <h1>Email:</h1>
                    <input
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <h1>Password:</h1>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>Register</button>
            </form>
            <button onClick={login}>Login page</button>
        </div>
    );
};

export default Home_register;
