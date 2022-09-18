import React from "react";
import "../write/Writing.css";

function Writing2() {
    return (
        <div className='Writing'>
            <input 
                type='text' id='title_txt' placeholder='제목'/>
            <input 
                type='text' id='title_txt' placeholder='작성자'/>
            <input 
                type='text' id='title_txt' placeholder='날짜'/>
            <input 
                type='text' id='content_txt' placeholder='내용을 입력하세요.'/>     
            <p>
                <button>등록</button>
                <button>취소</button>
            </p>
        </div>
    );
}

export default Writing2;

