
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function MyNavbar() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleOpenOffcanvas = () => setShowOffcanvas(true);
    const handleCloseOffcanvas = () => setShowOffcanvas(false);

    return (
        <>
            <Navbar sticky='top' className={`bg  navbar-expand-lg }`} variant="dark" expand="lg">
                <Container className='text-uppercase  fw-bold' >
                    <Navbar.Brand as={Link} to='/' className=''><span className='bg-one p-2 rounded-3'>هاله</span> الكومي</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-auto nav-toggle' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto" style={{ alignItems: 'self-start' }}>
                            <Nav.Link as={NavLink} className='m-3 px-2 text-white  ' to='/about'>من أنا</Nav.Link>
                            <Nav.Link as={NavLink} className='m-3 px-2 text-white' to='/services'>الخدمات</Nav.Link>
                            <Nav.Link as={NavLink} className='m-3 px-2 text-white' to='/contact'>تواصل معي</Nav.Link>
                            <Nav.Link as={NavLink} className='m-3 px-2 text-white' to='/gallery'>المعرض</Nav.Link>
                            <Nav.Link as={NavLink} className='m-3 px-2 text-white' to='/testimonials'>آراء العملاء</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                    <Button variant='' className="ms-3 bg-one " onClick={handleOpenOffcanvas}>
                        <i className="fa-solid fa-bars"></i>
                    </Button>
                    <NavLink to='/contact' className='bg-one p-2  text-decoration-none hvr-sweep-to-left' >لنتحدث <i class="fa-solid fa-arrow-left "></i> </NavLink>

                </Container>
            </Navbar>

            <Offcanvas show={showOffcanvas} className="custom-offcanvas " onHide={handleCloseOffcanvas} placement="end" dir="rtl">
                <Offcanvas.Header className='bg text-white ' closeButton closeVariant=' bg-one' >
                </Offcanvas.Header >
                <Offcanvas.Body className='bg text-white custom-offcanvas-2 '>
                    <div className=' p-3'>
                        <div className='text-center pt-5'><h1>هاله <span className='bg-one p-2 rounded-3'>الكومي</span></h1></div>
                        <div className='text-end mt-5 p-3'>
                            <p>اهلا بكم في هاله الكومي</p>
                            <p>انا هاله الكومي مدرسه لاطفال في سنوات الابتدائيه والثانويه والاعداديه</p>
                            <div className=''>
                                <div className='py-3'>
                                    <h4 className='text-secondary'>العنوان</h4>
                                    <h4>مسقط -عمان</h4>
                                </div>
                                <div className='py-3'>
                                    <h4 className='text-secondary'>البريد الالكتروني</h4>
                                    <h4>lHc6T@example.com</h4>
                                </div>
                                <div className='py-3'>
                                    <h4 className='text-secondary'>تواصل معي الان</h4>
                                    <h4>0123456789</h4>
                                </div>
                                <div className='py-3'>

                                    <div className='d-flex justify-content-center'>
                                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='mx-2 text-decoration-none  text-one'><i className="fa-brands bg fa-2x fa-facebook"></i></a>
                                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='mx-2 text-decoration-none text-one'><i className="fa-brands fa-2x fa-instagram"></i></a>
                                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='mx-2 text-decoration-none text-one'><i className="fa-brands fa-2x fa-twitter"></i></a>
                                    </div>

                                </div>
                                
                            </div>

                        </div>
                    </div>
                       <div className='text-center mt-2'>
                          <NavLink to='/contact' onClick={handleCloseOffcanvas} className='bg-one px-5 py-3  text-decoration-none hvr-sweep-to-left' >لنتحدث <i class="fa-solid fa-arrow-left me-2 "></i> </NavLink>
                       </div>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default MyNavbar;