import React from "react";
import Comments from "./Comments.js";
import GameDescription from "./GameDescription.js";
import "./GameBody.css"

const GameBody = (props) => {
    return (
        <div className="game-body">
            <h1>Опис</h1>
            <GameDescription Description = {props.Description} />
            <Comments />
        </div>
    );
}

export default GameBody;