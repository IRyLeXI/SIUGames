import React from "react";
import "./MainPage.css";
import MainPageHeader from "./MainPageHeader.js";
import MainPageBody from "./MainPageBody.js";

const MainPage = () => {
    return (
        <div className="main-page">
            <MainPageHeader />
            <MainPageBody />
        </div>
    );
}

export default MainPage;