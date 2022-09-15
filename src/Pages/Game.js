import React from "react";
import { Link } from "react-router-dom";
import PostMain from '../components/post/PostMain';

function Game() {
    return (
        <div className="Exercise"> 
            <Link to = "/game/writing">
                <button>글쓰기</button>
            </Link>
            <PostMain />
        </div>
    );
}

export default Game;


