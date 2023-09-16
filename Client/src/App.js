import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import Login from "./views/Login/Login";
import Favorites from "./views/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation(); //

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  //---------------------------------LOGIN------------------------------------------------

  async function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    try {
      const { data, error = data.error } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      if (!error) {
        const { access } = data;
        setAccess(access);
        access && navigate("/home");
      }
    } catch (error) {
      window.alert(error.message);
    }
  }

  //---------------------------------USE EFECT------------------------------------------------

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //--------------------------------ON SEARCH---------------------------------------------

  async function onSearch(id) {
    const URL = "http://localhost:3001/rickandmorty/character/";
    try {
      const { data } = await axios(URL + id);
      setCharacters((oldChars) => [...oldChars, data]);
    } catch (error) {
      window.alert(error.message);
    }
  }

  //---------------------------------ON CLOSE------------------------------------------------

  function onClose(id) {
    const fiterCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(fiterCharacters);
  }

  //---------------------------------RENDER------------------------------------------------

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
      </Routes>
    </div>
  );
}

export default App;
