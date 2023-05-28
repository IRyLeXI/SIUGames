import React from "react";
import "./UserLogin.css";

const UserLogin = () => {
    return (
        <div class="box">
            <form>
                <span class="text-center">login</span>
                <div class="input-container">
                    <input type="text" required />
                    <label>Username/Email</label>
                </div>
                <div class="input-container">
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <button type="button" class="btn">submit</button>
            </form>
        </div>
    );
}

export default UserLogin;