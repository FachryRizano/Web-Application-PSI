import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import logo from '../image/logo.jpg';
import axios from 'axios';


const Login = () => (
  <div className="componentsLoginWallpaper">
    <div className="componentsLogin">
      <Container fluid="sm">
        <Form className="loginFormPraweda">
          <div className="loginFormHeader">
            <img src={ logo } alt="Logo" />
            <h3>SAMUDERA INDONESIA</h3>
            <hr />
            <p>Please identify yourself to access</p>
          </div>
          <Form.Group controlId="loginFormEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="loginFormPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <a href="#">Forgot Password?</a>
        </Form>
      </Container>
    </div>
  </div>
);

export default Login;
