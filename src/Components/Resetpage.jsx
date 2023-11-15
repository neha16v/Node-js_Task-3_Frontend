import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Resetpage = () => {
    const [token, setToken] = useState("");
    const [password, setPassword] = useState("");
    const [userdata, setUserdata] = useState([]);
    const nav = useNavigate(); // Initialize useNavigate

    const headers = {
        Authorization: token,
        "Content-type": "application/json",
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:4000/api/user/resetPasswordpage",
                { token, password },
                { headers }
            );
            setUserdata([response.data]);
            console.log(response.data);
            if (response.status === 200) {
                alert("Done");
                nav("/login"); // Use the nav function to navigate to the login page
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <form onSubmit={submit}>
                <h1>Token:</h1>
                <input type='text' value={token} onChange={(e) => setToken(e.target.value)} />
                <h1>Password:</h1>
                <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Resetpage;
