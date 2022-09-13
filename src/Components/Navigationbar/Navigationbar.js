import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// Logo Component
import Logo from '../Logo/Logo'
import './Navigationbar.css'

function Navigationbar(props) {
  return (
    <Navbar collapseOnSelect='true' expand={"md"} fixed='top' variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Logo ownerName={props.ownerName}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id='rere'/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className='nav-link' onClick={() => document.getElementById('rere').click()}>Home</NavLink>
            <NavLink to="/About" className='nav-link' onClick={() => document.getElementById('rere').click()}>About</NavLink>
            <NavLink to="/Resume" className='nav-link' onClick={() => document.getElementById('rere').click()}>Resume</NavLink>
            <NavLink to="/Services" className='nav-link' onClick={() => document.getElementById('rere').click()}>Services</NavLink>
            <NavLink to="/Portfolio" className='nav-link' onClick={() => document.getElementById('rere').click()}>Portfolio</NavLink>
            <NavLink to="/Testimonials" className='nav-link' onClick={() => document.getElementById('rere').click()}>Testimonials</NavLink>
            <NavLink to="/Contact" className='nav-link' onClick={() => document.getElementById('rere').click()}>Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;