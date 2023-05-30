import React from "react";
import "./UserRegister.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateGame = () => {
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [tags, setTags] = useState("");
    const [description, setDescription] = useState("");
    const [picture, setPicture] = useState("");
    const [developers, setDevelopers] = useState("");
    const [trailer, setTrailer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post("https://localhost:7073/Game", {Name: name, tags: tags, description: description, picture: picture, developers: developers, trailer: trailer})
            .then(response => {
                navigate('/SIUGames');
                console.log(response.data);
            }).catch((err) => console.log(err));
    }

    return (
        <div className="box-register">
            <form>
                <span className="text-center">New Game</span>
                <div className="input-container-register">
                    <input type="text" onChange={event => setName(event.target.value)} required />
                    <label>Name</label>
                </div>
                <div className="input-container-register">
                    <input type="text" onChange={event => setTags(event.target.value)} required />
                    <label>Tags</label>
                </div>
                <div className="input-container-register">
                    <input type="text" onChange={event => setDescription(event.target.value)} required />
                    <label>Description</label>
                </div>
                <div className="input-container-register">
                    <input type="text" onChange={event => setPicture(event.target.value)} />
                    <label>Game Picture(URL for Image)</label>
                </div>
                <div className="input-container-register">
                    <input type="text" onChange={event => setDevelopers(event.target.value)} />
                    <label>Developers</label>
                </div>
                <div className="input-container-register">
                    <input type="text" onChange={event => setTrailer(event.target.value)} />
                    <label>Trailer</label>
                </div>
                <button type="button" className="btn-register" onClick={handleSubmit}>submit</button>
            </form>
        </div>
    );
}

export default CreateGame;

