import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MyNavbar() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleOpenOffcanvas = () => setShowOffcanvas(true);
    const handleCloseOffcanvas = () => setShowOffcanvas(false);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavClick = (id) => {
        if (location.pathname === '/') {
            scrollToSection(id);
            window.history.pushState(null, '', `#${id}`);
        } else {
            navigate(`/#${id}`);
        }
        handleCloseOffcanvas(); 
    };

    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (location.pathname === '/' && hash) {
            setTimeout(() => {
                scrollToSection(hash);
            }, 300);
        }
    }, [location]);

    

    return (
        <>
            <Navbar sticky='top' className={`bg navbar-expand-lg`} variant="dark" expand="lg">
                <Container className='text-uppercase fw-bold'>
                    <Navbar.Brand as={NavLink} to='/' onClick={() => window.scrollTo(0, 0)}>
                        <span className='bg-one p-2 rounded-3'>هاله</span> الكومي
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-auto nav-toggle' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto" style={{ alignItems: 'self-start' }}>
                            <Nav.Link onClick={() => handleNavClick('about')}>من أنا</Nav.Link>
                            <Nav.Link onClick={() => handleNavClick('services')}>الخدمات</Nav.Link>
                            <Nav.Link onClick={() => handleNavClick('contact')}>تواصل معي</Nav.Link>
                            <Nav.Link onClick={() => handleNavClick('gallery')}>المعرض</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button variant='' className="ms-3 bg-one" onClick={handleOpenOffcanvas}>
                        <i className="fa-solid fa-bars"></i>
                    </Button>
                    <NavLink to='/contact' className='bg-one p-2 text-decoration-none hvr-sweep-to-left'>
                        لنتحدث <i className="fa-solid fa-arrow-left"></i>
                    </NavLink>
                </Container>
            </Navbar>

            <Offcanvas show={showOffcanvas} className="custom-offcanvas" onHide={handleCloseOffcanvas} placement="end" dir="rtl">
                <Offcanvas.Header className='bg text-white' closeButton closeVariant='white'></Offcanvas.Header>
                <Offcanvas.Body className='bg text-white custom-offcanvas-2'>
                    <div className='text-center pt-5'><h1>هاله <span className='bg-one p-2 rounded-3'>الكومي</span></h1></div>
                    <div className='text-end mt-5 p-3'>
                        <p>اهلا بكم في هاله الكومي</p>
                        <p>معلمة لجميع المراحل التعليمية</p>
                        <div className='py-3'>
                            <h4 className='text-secondary'>العنوان</h4>
                            <h4>مسقط - المعبيله الجنوبيه بجوار مسجد الريان</h4>
                        </div>
                        <div className='py-3'>
                            <h4 className='text-secondary'>البريد الالكتروني</h4>
                            <h4>haltalkwmy4@gmail.com</h4>
                        </div>
                        <div className='py-3'>
                            <h4 className='text-secondary'>رقم الهاتف</h4>
                            <h4>+96879166733</h4>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href="https://www.facebook.com/karma.elkomy.2025" target="_blank" rel="noopener noreferrer" className='mx-2 text-one'><i className="fa-brands fa-2x fa-facebook"></i></a>
                            <a href="https://wa.me/+96879166733" target="_blank" rel="noopener noreferrer" className='mx-2 text-one'><i className="fa-brands fa-2x fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div className='text-center mt-4'>
                        <NavLink to='/contact' onClick={handleCloseOffcanvas} className='bg-one px-5 py-3 text-decoration-none hvr-sweep-to-left'>
                            لنتحدث <i className="fa-solid fa-arrow-left me-2"></i>
                        </NavLink>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default MyNavbar;
