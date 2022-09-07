import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PostMain from '../pages/PostMain';
import PostView from '../components/post/PostView';

function Exercise() {
    return (
        <div className="Exercise"> 
            <Link to = "/exercise/writing">
                <button>글쓰기</button>
            </Link>
            <Routes>
                <Route path='/exercise/postView/:no' element={<PostView/>} />
                <Route path='/' element={<PostMain />} />
            </Routes>
        </div>
    );
}

export default Exercise;




