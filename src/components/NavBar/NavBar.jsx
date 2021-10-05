import React from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className="sticky-top">
                <Container>
                    <NavLink to={'/'} className="name">
                        <Navbar.Brand href="#"> <h1 className="display-4 lead logo">Vs</h1></Navbar.Brand>
                    
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">

                            <NavDropdown title="Productos" id="collasible-nav-dropdown" className="fs-5">
                                <NavDropdown.Item href="#action/3.1">Alimentos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Bebidas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Condimentos</NavDropdown.Item>
                                <NavDropdown.Divider />

                                <NavLink to={'/productos'} className="name">
                                    <NavDropdown.Item href="#action/3.4">Todos</NavDropdown.Item>
                                </NavLink>


                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <NavLink to={'/about'} className="name">
                                <Nav.Link eventKey={3} href="#memes" className="fs-5"> Nosotros</Nav.Link>
                            </NavLink>

                            <NavLink to={"/contacto"} className="name">

                                <Nav.Link href="#deets" className="fs-5">Contacto</Nav.Link>
                            </NavLink>



                            <NavLink to={'/checkout'} className="name">
                                <Nav.Link href="#deets" className="mx-5" className="fs-5"><CartWidget /></Nav.Link>
                            </NavLink>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>



    );
}

export default NavBar;