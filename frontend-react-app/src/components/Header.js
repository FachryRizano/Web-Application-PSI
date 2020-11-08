import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import logoWithText from '../image/logo-with-text.png';

const Header = () => (
  <div className="componentsHeader">
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <img src={ logoWithText } alt="Logo" />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Login</Nav.Link>
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    <span className="logoutSeparator">|</span>
    <Nav className="mr-auto logoutLink">
      <Nav.Link href="/">Logout</Nav.Link>
    </Nav>
  </Navbar>
  </div>
);

export default Header;
