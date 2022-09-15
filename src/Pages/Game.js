import React from "react";
import { Link } from "react-router-dom";
import PostMain from '../components/post/PostMain';
import Header from '../pages/Header';

function Game() {
    return (
        <div> 
            <Header />
            <PostMain />
            <Link to = "/game/writing">
                <button>글쓰기</button>
            </Link>
        </div>
    );
}

export default Game;


