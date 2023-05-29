import React from 'react';
import { useState, useEffect } from 'react';
import UserHeader from './UserHeader/UserHeader.js';
import UserFavouriteGames from './UserBody/UserFavouriteGames.js';
import "./User.css"
import axios from 'axios';

const User = () =>{
    const [data, setData] = useState(null);
    useEffect(() => {
        const url = `https://localhost:7073/User/${localStorage.getItem("userId")}`;
        const fetchData = (u) => {
            return axios.get(u).then((res) => {
                setData(res.data);
            });
        };
        fetchData(url);
        
    }, []);
    return (
        data!==null?(
        <div className='user'>
            <div>
                <UserHeader Image = {data.avatar} UserName = {data.userName} Description = {data.Description} />
            </div>
            <div>
                <UserFavouriteGames />
            </div>
        </div>) : <h1>No User Info</h1>
    );
}

export default User;