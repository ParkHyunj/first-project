import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Exercise from './pages/Exercise';
import Cook from './pages/Cook';
import Game from './pages/Game';
import Login from './pages/Login';
import './App.css';
import Writing from './components/write/Writing';
import PostView from './components/post/PostView';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/exercise/*" element= { <Exercise />} />
                <Route path="/cook" element={ <Cook />} />
                <Route path="/game" element={ <Game />} />
                <Route path="/login" element={ <Login />} />
                <Route path="/exercise/writing" element={ <Writing/> } />  
                <Route path="/exercise/postView/:no" element={ <PostView/> } />         
            </Routes>  
        </div>      
    );
}

export default App;