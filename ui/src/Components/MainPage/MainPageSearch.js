import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card.js";
import "./MainPage.css";
import "./MainPageBody.css";
import "./MainPageHeader.css";
import "./DropBox.css";

const MainPageSearch = () => {
    const [data, setData] = useState(null);
    const [tag, setTag] = useState("Теги: ");
    const [search, setSearch] = useState("");

    let searchReq = {
        words: "",
        tags: "Теги: "
    };
  
    useEffect(() => {
        searchReq.words = search;
        searchReq.tags = tag;
        const url = "https://localhost:7073/Search";
        const fetchData = async (u) => {
            return await axios.get(u, {
                params: searchReq
            }).then((res) => {
                setData(res.data);
            });
        };
        fetchData(url);
    }, [tag, search]);

    

    return (
        <div className="main-page">
            <>
                <div className="main-page-header">
                    <div>
                        <Link to="/SIUGames" style={{ textDecoration: 'none' }}>
                            <section className="wrapper">
                                <div className="top">SIUGames</div>
                                <div className="bottom" aria-hidden="true">SIUGames</div>
                            </section>
                        </Link>
                    </div>

                    <div className="form__group">
                        <input type="text" className="form__input" id="name" placeholder="Game" onChange={event => { setSearch(event.target.value); }} />
                    </div>
                    <div>
                        <details className="custom-select">
                            <summary className="radios">
                                <input type="radio" name="item" id="default" title="Теги" defaultChecked />
                                <input type="radio" name="item" id="item1" title="Tags" />
                                <input type="radio" name="item" id="item2" title="Tags" />
                                <input type="radio" name="item" id="item3" title="Tags" />
                                <input type="radio" name="item" id="item4" title="Tags" />
                                <input type="radio" name="item" id="item5" title="Tags" />
                            </summary>
                            <ul className="ul1-list">
                                <li>
                                    <label onClick={() => setTag(HandleClick(tag, "Online"))}>Online</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(tag, "Shooter"))}>Shooter</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(tag, "First Person"))}>First Person</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(tag, "Third Person"))}>Third Person</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(tag, "Sport"))}>Sport</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(tag, "Racing"))}>Racing</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(tag, "Arcade"))}>Arcade</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(tag, "RPG"))}>RPG</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(tag, "MMORPG"))}>MMORPG</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(tag, "Offline"))}>Offline</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(tag, "Sandbox"))}>Sandbox</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(tag, "Platformer"))}>Platformer</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(tag, "Rogue like"))}>Rogue like</label>
                                </li>
                            </ul>
                        </details>
                        <h2>{tag}</h2>
                    </div>
                </div>
                <div>
                    <>
                        <div className="main-body-header">
                            <h2>Результати</h2>
                        </div>
                        <div className="main-page-body">
                            {
                                data !== null ?
                                    data.map(game => (
                                        <div>
                                            <Card
                                                Id={game.gameId}
                                                Image={game.picture === null ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" : game.picture}
                                                GameName={game.name}
                                                Tags={game.tags}
                                                GameDev={game.developers === null ? "N/A" : game.developers}
                                            />
                                        </div>
                                    )) : (<div>
                                        <h1>NO INFO</h1>
                                    </div>)

                            }
                        </div>
                    </>
                </div>
            </>
        </div>
    );
}

function HandleClick(tags, newTag) {
    if (tags.search(" #" + newTag) !== -1) {
        tags = tags.replace(" #" + newTag, "")
    }
    else {
        tags += " #" + newTag;
    }
    return tags;
}

export default MainPageSearch;