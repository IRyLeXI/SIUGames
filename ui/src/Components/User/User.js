import React from 'react';
import UserHeader from './UserHeader/UserHeader.js';
import UserFavouriteGames from './UserBody/UserFavouriteGames.js';
import "./User.css"

const User = (props) =>{
    return (
        <div className='user'>
            <div>
                <UserHeader Image = {props.Image} UserName = {props.UserName} Description = {props.Description} />
            </div>
            <div>
                <UserFavouriteGames />
            </div>
        </div>
    );
}

export default User;