import React from "react";
import GameTopInformation from "./GameTopInformation.js";
import GameRating from "./GameRating.js";
import "./GameHeader.css";


const GameHeader = (props) => {
    console.log(props);
    const trailer = props.Trailer === null ? "https://www.youtube.com/embed/dQw4w9WgXcQ" : props.Trailer;
    return (
    <div className="game-header">
        <div>
            <img src = {props.Image} alt="GameImage" />
        </div>
        <div className="game-trailer">   
            <iframe src={trailer} title="Game Trailer" allowFullScreen></iframe>
        </div>
        <div>
            <GameTopInformation Title = {props.Title} Tags = {props.Tags} Developer = {props.Developer} className = "game-top-information"></GameTopInformation> 
            <GameRating Rating = {props.Rating}></GameRating>
        </div>
       
    </div>);
}

export default GameHeader;

