import React from "react";
import { Link } from "react-router-dom";
import PostMain from '../components/post/PostMain';
import Header from '../pages/Header';

function Exercise() {
    return (
        <div className="Exercise"> 
            <Header/>
            <PostMain />
            <Link to = "/exercise/writing">
                <button>글쓰기</button>
            </Link>
        </div>
    );
}

export default Exercise;




