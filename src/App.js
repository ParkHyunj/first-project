import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './pages/Header';
import Exercise from './pages/Exercise';
import Cook from './pages/Cook';
import Game from './pages/Game';
import Login from './pages/Login';
import Writing from './components/write/Writing';
import PostView from './components/post/PostView';
import Main from './pages/Main';

function App() {
    return (
        <div>
            <Header />
            
            <Routes>
                {/* localhost */}
                <Route path="/" element= {<Main />} />
                <Route path="/exercise" element= { <Exercise />} />
                <Route path="/cook" element={ <Cook />} />
                <Route path="/game" element={ <Game />} />
                <Route path="/login" element={ <Login />} />
                <Route path="/exercise/writing" element={ <Writing/> } />  
                <Route path="/exercise/postView/:no" element={ <PostView/> } />  
                {/* gh-pages host */}
                <Route path="/first-project" element= {<Main />} />
                <Route path="/first-project/exercise" element= { <Exercise />} />
                <Route path="/first-project/cook" element={ <Cook />} />
                <Route path="/first-project/game" element={ <Game />} />
                <Route path="/first-project/login" element={ <Login />} />
                <Route path="/first-project/exercise/writing" element={ <Writing/> } />  
                <Route path="/first-project/exercise/postView/:no" element={ <PostView/> } />       
            </Routes> 
        </div>      
    );
}

export default App;