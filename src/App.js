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
import Writing1 from './components/cooks/Writing1';
import PostView1 from './components/cooks/PostView1';
import Writing2 from  './components/games/Writing2';
import PostView2 from  './components/games/PostView2';

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
                
                <Route path="/cook/writing" element={ <Writing1/> } />
                <Route path="/cook/postView/:no" element={ <PostView1/> } />   

                <Route path="/game/writing" element={ <Writing2/> } />
                <Route path="/game/postView/:no" element={ <PostView2/> } />   
                
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