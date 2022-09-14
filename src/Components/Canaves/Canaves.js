import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import '../Navigationbar/Navigationbar.css'

function Canaves(props) {
    const navTogglerFun = () => {
        if( window.innerWidth <= 767 ){
          document.querySelector('.btn-close').click();
        }
      }
    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} variant='dark'  expand={expand} fixed='top'>
                    <Container fluid>
                        <Navbar.Brand href="#"><Logo ownerName={props.ownerName} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <Logo ownerName={props.ownerName} />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <NavLink to="/" className='nav-link' onClick={navTogglerFun}>Home</NavLink>
                                    <NavLink to="/About" className='nav-link' onClick={navTogglerFun}>About</NavLink>
                                    <NavLink to="/Resume" className='nav-link' onClick={navTogglerFun}>Resume</NavLink>
                                    <NavLink to="/Services" className='nav-link' onClick={navTogglerFun}>Services</NavLink>
                                    <NavLink to="/Portfolio" className='nav-link' onClick={navTogglerFun}>Portfolio</NavLink>
                                    <NavLink to="/Testimonials" className='nav-link' onClick={navTogglerFun}>Testimonials</NavLink>
                                    <NavLink to="/Contact" className='nav-link' onClick={navTogglerFun}>Contact</NavLink>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Canaves;