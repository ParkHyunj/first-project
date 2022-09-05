import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Exercise from './components/Exercise';
import Cook from './components/Cook';
import Game from './components/Game';
import Login from './components/Login';
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