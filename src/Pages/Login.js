import React from "react";
import "../components/write/Writing.css";

function Login() {
    return (
        <div className='Writing'>
        <input 
            type='text' id='title_txt' placeholder='email'/>
        <input 
            type='text' id='title_txt' placeholder='password'/>
        <p>
            <button>로그인</button>
        </p>
    </div>
    );
}

export default Login;

