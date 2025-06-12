import { useState , useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function MyNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
        <Navbar sticky='top' className={`bg  navbar-expand-lg  ${isScrolled ? 'scrolled' : ''}`} variant="dark" expand="lg">
            <Container className='text-uppercase  fw-bold' >
                <Navbar.Brand as={Link} to='/' className='fs-2'>Start Framework</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{ alignItems: 'self-start' }}>
                        <Nav.Link as={NavLink} className='m-3 px-2 text-white' to='/about'>about</Nav.Link>
                        <Nav.Link as={NavLink} className='m-3 px-2 text-white' to='/services'>services</Nav.Link>
                        <Nav.Link as={NavLink}  className='m-3 px-2 text-white' to='/contact'>contact</Nav.Link>
                        <Nav.Link as={NavLink}  className='m-3 px-2 text-white' to='/gallery'>gallery</Nav.Link>
                        <Nav.Link as={NavLink}  className='m-3 px-2 text-white' to='/testimonials'>testimonials</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default MyNavbar;