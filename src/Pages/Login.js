import React from "react";
// import "../components/write/Writing.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';

function Login() {
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="자동 로그인 활성" />
        </Form.Group>
        <Button variant="primary" type="submit">
          <button>Login</button>
        </Button>
      </Form>
    );
}

export default Login;

