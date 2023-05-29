import React from "react";
import "./MainPageHeader.css"
import { DropBox } from "./DropBox.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

let searchBar = "";
const MainPageHeader = () => {
    const [search, setSearch] = useState("");
    useEffect(() => {
        searchBar = search;
    }, [search]);
    return (
        <div className="main-page-header">
            <div>
            <Link to = "/" style={{ textDecoration: 'none' }}>
                <section className="wrapper">
                    <div className="top">SIUGames</div>
                    <div className="bottom" aria-hidden="true">SIUGames</div>
                </section>
            </Link>
            </div>
            
            <div className="form__group">
                <input type="text" className="form__input" id="name" placeholder="Game" onChange={event => {setSearch(event.target.value);}}/>
            </div>
            <DropBox />
        </div>
    );
}

export {MainPageHeader, searchBar};