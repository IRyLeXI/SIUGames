import React from "react";
import { useState, useEffect } from 'react';
import GameBody from "./GameBody/GameBody.js";
import GameHeader from "./GameHeader/GameHeader.js";
import "./Game.css";
import axios from "axios";

//const gameData = axios.get(`https://localhost:7073/Game/${localStorage.getItem("cardId")}`);
const Game = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const url = `https://localhost:7073/Game/${localStorage.getItem("cardId")}`;
        const fetchData = (u) => {
            
            return axios.get(u).then((res) => {
                setData(res.data);
            });
        };
        fetchData(url);
        
    }, []);
    
    
    return (
        data!==null?
        (<div className="game-page">
            <GameHeader Title = {data.name} Image = {data.picture} Developer = {data.developers} Tags = {data.tags} Rating = {data.rating} Trailer = {data.gameTrailer}/>
            <GameBody Description = {data.description} />
        </div>) : (
            <h1>NO INFO</h1>
        )
    );
}

export default Game;