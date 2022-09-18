import React from "react";
import { Link } from "react-router-dom";
import PostMain from '../components/post/PostMain';
import '../pages/Exercise.css';
import { Container } from 'react-bootstrap';

function Game() {
    return (
        <div className="exercise"> 
            <Container>
                
                <div className="exercise-wrap">
                    <div className="option1-wrap">
                        <div className="option1">
                            <Link to = "/exercise/writing">
                                <button className="btn">글쓰기</button>
                            </Link>
                        </div>
                    </div>

                    <div className="option2-wrap">
                        <div className="option2">
                            <PostMain />
                        </div>
                    </div>
                </div>
           
            </Container>
        </div>
    );
}

export default Game;


