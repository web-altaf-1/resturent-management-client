import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "src/Profile/client";
function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: ""
    });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            await client.signin(credentials);
            navigate("/profile");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div>
            <h1>Signup</h1>
            {error && <div>{error}</div>}
            <label>Username</label>
            <input
                value={credentials.username}
                onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value
                })}
            /><br /><br />

            <label>Password</label>
            <input
                value={credentials.password}
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value
                })}
            /><br /><br />

            <label>First Name</label>
            <input
                value={credentials.first_name}
                onChange={(e) => setCredentials({
                    ...credentials,
                    first_name: e.target.value
                })}
            /><br /><br />

            <label>Email</label>
            <input
                value={credentials.email}
                onChange={(e) => setCredentials({
                    ...credentials,
                    email: e.target.value
                })}
            /><br /><br />

            <label>Last Name</label>
            <input
                value={credentials.last_name}
                onChange={(e) => setCredentials({
                    ...credentials,
                    last_name: e.target.value
                })}
            /><br /><br />

            <label>Phone</label>
            <input
                value={credentials.phone}
                onChange={(e) => setCredentials({
                    ...credentials,
                    phone: e.target.value
                })}
            /><br /><br />

            <button onClick={signup}>
                Signup
            </button>
        </div>
    );
}
export default Signup;