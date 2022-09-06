import React from "react";
import PostMain from '../pages/PostMain';
import { Link } from "react-router-dom";

function Exercise() {
    return (
        <div className="Exercise"> 
            운동 게시판
            <Link to = "/writing">
                <button>글쓰기</button>
            </Link>
            <PostMain />
        </div>
    );
}

export default Exercise;




