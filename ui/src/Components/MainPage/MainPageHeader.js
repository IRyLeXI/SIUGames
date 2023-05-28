import React from "react";
import "./MainPageHeader.css"
import DropBox from "./DropBox.js";

const MainPageHeader = () => {
    return (
        <div className="main-page-header">
            <div>
                <section className="wrapper">
                    <div className="top">SIUGames</div>
                    <div className="bottom" aria-hidden="true">SIUGames</div>
                </section>
            </div>
            <div className="form__group">
                <input type="text" className="form__input" id="name" placeholder="Game" />
            </div>
            <DropBox />
        </div>
    );
}

export default MainPageHeader;