import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Forgotpassword = () => {
    const [email, setEmail] = useState("")
    const nav = useNavigate()
    const [userdata, setUserdata] = useState([]);
    const [token] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU0NzEwYTg2YTVhZDdiMDkwZjViNzMiLCJpYXQiOjE3MDAwMzI4NDh9.CKto3zEmw57tzDp87DkFInM4rr6MPENYjjDEoQob9pw");
    const headers = {
        Authorization: token,
        "Content-type": "application/json",
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:4000/api/user/resetpassword",
                { email },
                { headers }
            );
            setUserdata([response.data]);
            console.log(response.data);
            if (response.status == 200) {
                alert("Email sent")
                nav("/resetpage")
            }
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div>
            <form onSubmit={submit}>
                <h1>Email:</h1>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>

        </div>
    );
};

export default Forgotpassword;