import React from "react";
import "./UserRegister.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserRegister = () => {
    let navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post("https://localhost:7073/User", {userName, email, password, avatar})
            .then(response => {
                localStorage.setItem("userId", response.data.userId);
                localStorage.setItem("token", response.data.token);
                navigate('/Profile');
                window.location.reload();
                console.log(response.data);
            }).catch((err) => console.log(err));
    }

    return (
        <div className="box-register">
            <form>
                <span className="text-center">register</span>
                <div className="input-container-register">
                    <input type="text" onChange={event => setUserName(event.target.value)} required />
                    <label>Username</label>
                </div>
                <div className="input-container-register">
                    <input type="mail" onChange={event => setEmail(event.target.value)} required />
                    <label>Email</label>
                </div>
                <div className="input-container-register">
                    <input type="password" onChange={event => setPassword(event.target.value)} required />
                    <label>Password</label>
                </div>
                <div className="input-container-register">
                    <input type="text" onChange={event => setAvatar(event.target.value)} />
                    <label>Avatar(URL for Image)</label>
                </div>
                <div>
                    <button type="button" className="btn-register" onClick={handleSubmit}>submit</button>
                </div>
                <div className="btn2">
                    <button type="button" className="btn" onClick={() => navigate('/')}>login</button>
                </div>
            </form>
        </div>
    );
}

export default UserRegister;