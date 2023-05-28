import React from 'react';
import UserHeader from './UserHeader/UserHeader.js';
import UserFavouriteGames from './UserBody/UserFavouriteGames.js';

const User = (props) =>{
    return (
        <>
            <UserHeader Image = {props.Image} UserName = {props.UserName} Description = {props.Description} />
            <UserFavouriteGames />
        </>
    );
}