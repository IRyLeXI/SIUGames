import React from "react";
import "./GameTopInformation.css"
import axios from "axios";
import { useState } from "react";

const GameTopInformation = (props) =>{

    const cardId = localStorage.getItem("cardId");
    const userId = localStorage.getItem("userId");
    const handleClick = () => {
        console.log(cardId, userId);
        axios.post(`https://localhost:7073/User/UserGames/${userId}`, {favouriteGameId: cardId, userId: userId}).then((res) => {
            console.log(res.data);
        })
    }

    return ( <>
    <div className="game-top-information">
        <h1 className="game-title"> {props.Title} </h1>
        <h4 className="game-tags"> {props.Tags} </h4>
        <h5 className="game-developer"> {props.Developer} </h5>
    </div>
    <div>
        <button type ="button" className="buttn" onClick={handleClick}>Add to Favourites!</button>
    </div>
    </>);
}

export default GameTopInformation;