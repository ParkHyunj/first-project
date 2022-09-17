import React from "react";
import { Link } from "react-router-dom";
import PostMain from '../components/post/PostMain';
import Header from '../pages/Header';
import '../pages/Exercise.css';
import { Container } from 'react-bootstrap';


function Exercise() {
    return (
        <div className="exercise"> 
            <Container>
                
                <div className="exercise-wrap">
                    <div className="option1-wrap">
                        <div className="option1">
                            <Header/>
                        </div>
                    </div>
                    <div className="option1-wrap">
                        <div className="option2">
                            <PostMain />
                        </div>
                    </div>
                    <div className="option1-wrap">
                        <div className="option3">
                            <Link to = "/exercise/writing">
                                <button>글쓰기</button>
                            </Link>
                        </div>
                    </div>
                </div>
           
            </Container>
        </div>
    );
}

export default Exercise;




