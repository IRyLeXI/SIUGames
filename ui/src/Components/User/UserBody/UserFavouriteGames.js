import React from "react";
import Card from "../../Card/Card.js";
import "./UserFavouriteGames.css";

const UserFavouriteGames = (props) => {
    return (<>
        <div className="body-header">
            <h2>Favourite Games</h2>
        </div>
    <div className="user-favourite-games">
        
        <div>
            <Card
                Image="https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png"
                GameName="FIFA 2022"
                Tags="Sport Online Football"
                GameDev="EA Sports"
            />
        </div>
        <div>
            <Card
                Image="https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png"
                GameName="FIFA 2022"
                Tags="Sport Online Football"
                GameDev="EA Sports"
            />
        </div>
        <div>
            <Card
                Image="https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png"
                GameName="FIFA 2022"
                Tags="Sport Online Football"
                GameDev="EA Sports"
            />
        </div>
        <div>
            <Card
                Image="https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png"
                GameName="FIFA 2022"
                Tags="Sport Online Football"
                GameDev="EA Sports"
            />
        </div>
        <div>
            <Card
                Image="https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png"
                GameName="FIFA 2022"
                Tags="Sport Online Football"
                GameDev="EA Sports"
            />
        </div>
        <div>
            <Card
                Image="https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png"
                GameName="FIFA 2022"
                Tags="Sport Online Football"
                GameDev="EA Sports"
            />
        </div>
        
    </div>
    </>);
    //return list of cards
}

export default UserFavouriteGames;