import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// Logo Component
import Logo from '../Logo/Logo'
import './Navigationbar.css'
function Navigationbar(props) {
  return (
    <Navbar expand="lg" fixed='top' variant="dark">
      <Container>
        <Navbar.Brand className="" href="#home">
          <Logo ownerName={props.ownerName}/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="/About" className='nav-link'>About</NavLink>
            <NavLink to="/Resume" className='nav-link'>Resume</NavLink>
            <NavLink to="/Services" className='nav-link'>Services</NavLink>
            <NavLink to="/Portfolio" className='nav-link'>Portfolio</NavLink>
            <NavLink to="/Testimonials" className='nav-link'>Testimonials</NavLink>
            <NavLink to="/Contact" className='nav-link'>Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;