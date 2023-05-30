import React from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    const [navBarState, setNavBarState] = useState(false);
    const [loginState, setLoginState] = useState(IsTokenExists());
    let navigate = useNavigate();

    return (
        <>
            {loginState && (
                <button className="nav-bar-button" onClick={() => setNavBarState(!navBarState)}>+</button>
            )}
            {loginState && navBarState && (
                <div className="nav-bar">
                    <div className="nav-bar-caption">
                        <Link to="/SIUGames" className="nav-bar-home"> SIU Games </Link>
                    </div>
                    <div className="nav-bar-caption">
                        <Link to="/Profile" className="nav-bar-side">Profile</Link>
                    </div>
                    <div className="nav-bar-caption">
                        <Link to="/CreateGame" className="nav-bar-side">CreateGame</Link>
                    </div>
                    <div>
                        <button className="nav-bar-logout" onClick={() => { setNavBarState(false); navigate('/'); HandleLogOut();}}> Log out </button>
                    </div>
                </div>
            )}
        </>
    );
}

function HandleLogOut() {
    localStorage.clear();
    window.location.reload();
}

function IsTokenExists() {
    let token = localStorage.getItem("token");
    return token ? true : false;
}

export default NavBar;