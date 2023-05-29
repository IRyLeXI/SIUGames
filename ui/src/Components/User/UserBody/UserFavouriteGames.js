import React from "react";
import Card from "../../Card/Card.js";
import "./UserFavouriteGames.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserFavouriteGames = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const url = `https://localhost:7073/User/UserGames/${localStorage.getItem("userId")}`;
        const fetchData = (u) => {
            return axios.get(u).then((res) => {
                console.log(res.data);
                setData(res.data);
            });
        };
        fetchData(url);
        
    }, []);

    return (<>
        <div className="body-header">
            <h2>Favourite Games</h2>
        </div>
    <div className="user-favourite-games">
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
        </div>)) : (
        <div>
            <h1>This user does not have favourite games for now.</h1>
        </div>)}
    </div>
    </>);
}

export default UserFavouriteGames;