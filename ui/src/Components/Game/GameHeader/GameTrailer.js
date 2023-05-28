import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

const GameTrailer = (props) => {
    return (
        <div className="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Game Trailer" allowFullScreen></iframe>
        </div>
    );
}

export default GameTrailer;