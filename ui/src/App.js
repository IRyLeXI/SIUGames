import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from './Components/Game/Game.js';
import MainPage from './Components/MainPage/MainPage.js';
import User from './Components/User/User.js';
import UserLogin from './Components/UserLogin/UserLogin.js';
import UserRegister from './Components/UserRegister/UserRegister.js';
import CreateGame from './Components/Game/GameCreate/GameCreate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
          <Route path="game" state={{ from: "occupation" }} element={<Game />} />
          <Route path="Profile" element={<User />} />
          <Route path="CreateGame" element = {<CreateGame />}/>
          <Route path="Login" element={<UserLogin />} />
          <Route path="Register" element={<UserRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;