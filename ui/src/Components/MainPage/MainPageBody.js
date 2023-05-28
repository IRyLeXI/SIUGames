import React from "react";
import Card from "../Card/Card.js";
import "./MainPageBody.css";
import axios from "axios";

const MainPageBody = () => {
    let Games = axios.get("https://localhost:7073/Game"); 
    console.log(Games.data);
    return (<>
        <div className="main-body-header">
            <h2>Результати</h2>
        </div>
    <div className="main-page-body">
        <div>
            <Card
                Image="https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png"
                GameName="FIFA 2022"
                Tags="Sport Online Football"
                GameDev="EA Sports"
            />
        </div>
        <div>
            <Card
                Image="https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png"
                GameName="FIFA 2022"
                Tags="Sport Online Football"
                GameDev="EA Sports"
            />
        </div>
        <div>
            <Card
                Image="https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png"
                GameName="FIFA 2022"
                Tags="Sport Online Football"
                GameDev="EA Sports"
            />
        </div>
        <div>
            <Card
                Image="https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png"
                GameName="FIFA 2022"
                Tags="Sport Online Football"
                GameDev="EA Sports"
            />
        </div>
        <div>
            <Card
                Image="https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png"
                GameName="FIFA 2022"
                Tags="Sport Online Football"
                GameDev="EA Sports"
            />
        </div>
        <div>
            <Card
                Image="https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png"
                GameName="FIFA 2022"
                Tags="Sport Online Football"
                GameDev="EA Sports"
            />
        </div>
        
    </div>
    </>);
    //return list of cards
}

export default MainPageBody;