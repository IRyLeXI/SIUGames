import React from "react";
import "./UserLogin.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault()
        axios
            .post("https://localhost:7073/UserLogin", { userName, password })
            .then(response => {
                localStorage.setItem("userId", response.data.userId);
                navigate('/');
                console.log(response.data);
            }).catch((err) => console.log(err));
    }

    return (
        <div className="box">
            <form>
                <span className="text-center">login</span>
                <div className="input-container">
                    <input type="text" onChange={event => setUserName(event.target.value)} required />
                    <label>Username/Email</label>
                </div>
                <div className="input-container">
                    <input type="password" onChange={event => setPassword(event.target.value)} required />
                    <label>Password</label>
                </div>
                <button type="button" className="btn" onClick={handleSubmit}>submit</button>
            </form>
        </div>
    );
}

export default UserLogin;