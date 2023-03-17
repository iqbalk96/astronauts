
import React, { useState } from 'react';
import { Container, Navbar, Nav, Modal, Button } from 'react-bootstrap'
import { Link, useLocation } from "react-router-dom"
// import Switch from "react-switch";
import AstroLogo from '../../assets/logo.svg'

const NavigationLayouts = () => {

    const location = useLocation();
    const pathname = location.pathname.slice(1)

    // const [dark] = useState(true)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    // const onSwitchAction = () => {
    //     setDark(!dark);
    // };

    const routes = [
        { link: '/', name: 'homepage' },
        { link: '/albums', name: 'albums' },
        { link: '/posts', name: 'posts' },
        { link: '/users', name: 'users' }
    ]

    // const showAlert = () => {
    //     setShow(true)
    // }

    const AlertModal = () => {
        return (
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Attention</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Dark/Light mode is in progress</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="bg-theme p-3">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={AstroLogo} width="100" alt="Astro Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto"></Nav>
                        <Nav >
                            {routes.map((route, i) =>
                                <Nav.Link as={Link} to={route.link} key={i} className={(pathname === '' && i === 0) || pathname === route.name ? "text-capitalize active bg-active" : "text-capitalize"} >
                                    {route.name}
                                </Nav.Link>
                            )}
                        </Nav>
                        {/* <Nav>
                            <Nav.Link as={Link} to="/">
                                <Switch onColor="#4595D0" checkedIcon={false} uncheckedIcon={false} onChange={() => showAlert()} checked={dark} />
                            </Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {show && <AlertModal />}
        </React.Fragment>
    )
}

export default NavigationLayouts
