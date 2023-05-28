import React from "react";
import GameBody from "./GameBody/GameBody.js";
import GameHeader from "./GameHeader/GameHeader.js";
import "./Game.css";
import axios from "axios";

const Game = (props) => {
    return (
        <div className="game-page">
            <GameHeader Title = {props.Title} Image = { props.Image } Developer = {props.Developer} Tags = {props.Tags} Rating = {props.Rating} />
            <GameBody Description = {props.Description} />
        </div>
    );
}

export default Game;