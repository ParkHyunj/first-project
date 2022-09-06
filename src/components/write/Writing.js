import React from "react";

function Writing() {
    return (
        <div>
           <h1>제목</h1> 
                <input type='text'/>
           <h2>작성자</h2>
                <input type='text'/>
           <h3>날짜</h3>
                <input type='text'/>
           <h4>내용</h4>
                <textarea></textarea>
            <p>
                <button>등록</button>
                <button>취소</button>
            </p>
        </div>
    );
}

export default Writing;

