import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user]=useAuthState(auth);
    const signout = () => {
      signOut(auth);
    };
    return (
        <>
        <Navbar collapseOnSelect expand="lg" sticky="top"className='bg'>
          <Container>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="mx-auto">
             <Nav.Link as={Link} to="/">Home</Nav.Link>
             <Nav.Link as={Link} to="/todoapps">TodoApps</Nav.Link>
             {
               user?
               <Nav.Link onClick={signout}  as={Link} to="">Sign Out</Nav.Link>
               :
               <Nav.Link  as={Link} to="/login">Login</Nav.Link>
             }
               <Nav.Link  as={Link} to="/register">Register</Nav.Link >
             </Nav>
           
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
        
        )
};

export default Header;