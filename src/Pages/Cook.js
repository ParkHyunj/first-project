import React from "react";
import { Link } from "react-router-dom";
import PostMain from '../pages/PostMain';

function Cook() {
    return (
        <div className="Exercise"> 
            <Link to = "/cook/writing">
                <button>글쓰기</button>
            </Link>
            <PostMain />
        </div>
    );
}

export default Cook;


