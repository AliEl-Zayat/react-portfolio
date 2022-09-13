import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// Logo Component
import Logo from '../Logo/Logo'
import './Navigationbar.css'

function Navigationbar(props) {
  const navTogglerFun = () => {
    if( window.innerWidth <= 767 ){
      document.getElementById('rere').click();
    }
  }
  return (
    <Navbar collapseOnSelect='true' expand={"md"} fixed='top' variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Logo ownerName={props.ownerName}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id='rere'/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className='nav-link' onClick={navTogglerFun}>Home</NavLink>
            <NavLink to="/About" className='nav-link' onClick={navTogglerFun}>About</NavLink>
            <NavLink to="/Resume" className='nav-link' onClick={navTogglerFun}>Resume</NavLink>
            <NavLink to="/Services" className='nav-link' onClick={navTogglerFun}>Services</NavLink>
            <NavLink to="/Portfolio" className='nav-link' onClick={navTogglerFun}>Portfolio</NavLink>
            <NavLink to="/Testimonials" className='nav-link' onClick={navTogglerFun}>Testimonials</NavLink>
            <NavLink to="/Contact" className='nav-link' onClick={navTogglerFun}>Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;