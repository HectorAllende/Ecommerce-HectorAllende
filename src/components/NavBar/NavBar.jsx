import React from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className="sticky-top">
                <Container>
                    <NavLink to={'/'}>

                    <Navbar.Brand href="#home"> <h1 className="display-4 lead">Vs</h1></Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">

                            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Alimentos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Bebidas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Condimentos</NavDropdown.Item>
                                <NavDropdown.Divider />

                                <NavLink to={'/productos'}>
                                    <NavDropdown.Item href="#action/3.4">Todos</NavDropdown.Item>
                                </NavLink>


                            </NavDropdown>
                        </Nav>
                        <Nav>

                            <NavLink to={"/contacto"}>

                                <Nav.Link href="#deets">Contacto</Nav.Link>
                            </NavLink>

                            <NavLink to={'/about'}>
                                <Nav.Link eventKey={3} href="#memes">Nosotros</Nav.Link>
                            </NavLink>

                            <NavLink  to={'/checkout'}>
                                <Nav.Link href="#deets" className="mx-3"><CartWidget /></Nav.Link>
                            </NavLink>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>



    );
}

export default NavBar;