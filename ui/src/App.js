import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from './Components/Game/Game.js';
import User from './Components/User/User.js';
import UserLogin from './Components/UserLogin/UserLogin.js';
import UserRegister from './Components/UserRegister/UserRegister.js';
import CreateGame from './Components/Game/GameCreate/GameCreate.js';
import NavBar from './Components/NavBar/NavBar.js';
import MainPageSearch from './Components/MainPage/MainPageSearch.js';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'SIUGames';
  }, []);
  return ( 
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<UserLogin />} />
          <Route path="Game" state={{ from: "occupation" }} element={<Game />} />
          <Route path="Profile" element={<User />} />
          <Route path="CreateGame" element = {<CreateGame />}/>
          <Route path="SIUGames" element={<MainPageSearch />} />
          <Route path="Register" element={<UserRegister />} />
      </Routes>
    </BrowserRouter>);
}

export default App;