import React from "react";
import "./UserRegister.css";

const UserRegister = () => {
    return (
        <div class="box">
            <form>
                <span class="text-center">register</span>
                <div class="input-container">
                    <input type="text" required />
                    <label>Username</label>
                </div>
                <div class="input-container">
                    <input type="mail" required />
                    <label>Email</label>
                </div>
                <div class="input-container">
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <div class="input-container">
                    <input type="text" />
                    <label>Avatar(URL for Image)</label>
                </div>
                <button type="button" class="btn">submit</button>
            </form>
        </div>
    );
}

export default UserRegister;