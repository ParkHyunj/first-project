import React from "react";
import { Link } from "react-router-dom";
import PostMain1 from '../components/cooks/PostMain1';
import { Container } from 'react-bootstrap';
import '../pages/Exercise.css';

function Cook() {
    return (
        <div className="exercise"> 
            <Container>
                
                <div className="exercise-wrap">
                    <div className="option1-wrap">
                        <div className="option1">
                            <Link to = "/cook/writing">
                                <button className="btn">글쓰기</button>
                            </Link>
                        </div>
                    </div>

                    <div className="option2-wrap">
                        <div className="option2">
                            <PostMain1 />
                        </div>
                    </div>
                </div>
           
            </Container>
        </div>
    );
}

export default Cook;


