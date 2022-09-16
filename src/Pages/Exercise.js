import React from "react";
import { Link } from "react-router-dom";
import PostMain from '../components/post/PostMain';
import Header from '../pages/Header';
import '../pages/Exercise.css';

function Exercise() {
    return (
        <div className="Exercise"> 
            <div className="item">
                <Header/>
            </div>
            <div className="item">
                <PostMain />
            </div>
            <div className="item">
                <Link to = "/exercise/writing">
                    <button>글쓰기</button>
                </Link>
            </div>
        </div>
    );
}

export default Exercise;




