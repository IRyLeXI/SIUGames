import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card.js";
import "./MainPageBody.css";
import axios from "axios";


const MainPageBody = (props) => {   
    const [data, setData] = useState(null);
    let search = {
        words: "m",
        tags: "Теги: #Offline"
    };
    
    useEffect(() => {
        const url = "https://localhost:7073/Search";
        const fetchData = async (u) => {
            return await axios.get(u, {
                params: search
            }).then((res) => {
                setData(res.data);
            });
        };
        fetchData(url);
        
    }, []);

    return (
    <>
        <div className="main-body-header">
            <h2>Результати</h2>
        </div>
    <div className="main-page-body">
        {
            data!==null?
            data.map(game => (
                <div>
                    <Card 
                    Id = {game.gameId}
                    Image = {game.picture === null ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" : game.picture}
                    GameName = {game.name}
                    Tags = {game.tags}
                    GameDev = {game.developers === null ? "N/A" : game.developers}
                    />
                </div>
            )) : (<div>
                <h1>NO INFO</h1>
            </div>)

        }
    </div>
    </>);
    //return list of cards
}


export default MainPageBody;