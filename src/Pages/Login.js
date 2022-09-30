import React, { useState } from "react";
import Header from '../pages/Header';

function Login() {
  const [ id, setId ] = useState('');
  const [ pw, setPw ] = useState('');

  const [ button, setButton ] = useState(true);

  function changeButton() {
    id.includes('@') && pw.length >= 8 ? setButton(false) : setButton(true);
  }

  const realId = "hyunjin@gmail.com";
  const realPw = "12345678";

  return (
    <div>
      <input
        placeholder="Your Email"
        id="id"
        className="login"
        onChange={e => { 
          setId(e.target.value);
        }}
        onKeyUp={ changeButton }
      />
      <input
        type="password"
        placeholder="Your Password"
        id="password"
        className="login"
        onChange={e => {
          setPw(e.target.value)
        }}
        onKeyUp={ changeButton }
      />
      <button
        type = "button"
        className = "loginButton"
        disabled={button}
        onClick={e => {
          if (realId == id) {
            if (realPw == pw) {
              e.stopPropagation();
              Header();
            }
          } else {
            alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
          }
        }}
      >
        button</button>
    </div>
  );
}

export default Login;





// import React from "react";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Form';
// import '../pages/Login.css';
// import { Container } from 'react-bootstrap';

// function Login() {
//     return (
//       <div>
//         <Container>
//           <Form>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" />
//               <Form.Text className="text-muted">
//                 We'll never share your email with anyone else.
//               </Form.Text>
//             </Form.Group>
  
//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//               <Form.Check type="checkbox" label="자동 로그인 활성" />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               <button>Login</button>
//             </Button>
//           </Form>
//         </Container>
//       </div>
//     );
// }

// export default Login;

