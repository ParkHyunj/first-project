import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Exercise from './Pages/Exercise';
import Cook from './Pages/Cook';
import Game from './Pages/Game';
import Login from './Pages/Login';
import './App.css';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/exercise" element= { <Exercise />} />
                <Route path="/cook" element={ <Cook />} />
                <Route path="/game" element={ <Game />} />
                <Route path="/login" element={ <Login />} />           
            </Routes>  
        </div>      
    );
}

export default App;