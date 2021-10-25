import React, { useContext } from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { CartContext } from '../../Context/CartContext'
import { HeartContext } from '../../Context/HeartContext'
import './NavBar.css'
import Wishlist from '../Checkout/Wishlist'

const NavBar = () => {

    const { heart } = useContext(HeartContext)
    const { calcularCantidad, } = useContext(CartContext)

    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className="sticky-top">
                <Container>
                    <NavLink to={'/'} className="name d-flex align-items-center mb-2">
                        {/* <Navbar.Brand href="#"> <h1 className="display-4 lead logo ">Vs</h1></Navbar.Brand> */}
                        <Navbar.Brand href="#"> <img src="img/logo1.svg" width="80px" alt="logo" className="logo" /></Navbar.Brand>
                    </NavLink>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto d-flex align-items-start align-items-end ">

                            <NavDropdown title="Productos" id="collasible-nav-dropdown" className="fs-5 m-3 fw-bolder titulo">
                                <NavLink to={'/productos/Alimentos'} className="name">
                                    <NavDropdown.Item href="#action/3.1">Alimentos</NavDropdown.Item>
                                </NavLink>
                                <NavLink to={'/productos/Bebidas'} className="name">
                                    <NavDropdown.Item href="#action/3.2">Bebidas</NavDropdown.Item>
                                </NavLink>

                                <NavLink to={'/productos/Condimentos'} className="name">
                                    <NavDropdown.Item href="#action/3.3">Condimentos</NavDropdown.Item>
                                </NavLink>

                                <NavDropdown.Divider />

                                <NavLink to={'/productos'} className="name">
                                    <NavDropdown.Item href="#action/3.4">Todos</NavDropdown.Item>
                                </NavLink>
                            </NavDropdown>

                            <NavLink to={'/about'} className="name m-3" >
                                <Nav.Link eventKey={3} href="#memes" className="fs-5 fw-bolder titulo"> Nosotros</Nav.Link>
                            </NavLink>
                            <div className="position-relative">

                                <NavDropdown childBsPrefix="hola" className="position-relative fs-5 m-3" title={
                                    <>
                                        <box-icon name='heart' color="white"></box-icon>
                                        {heart.length > 0 &&
                                            <>
                                                <span class="position-absolute button-0 start-55 translate-middle p-2 bg-danger border border-light rounded-circle">
                                                    <span class="visually-hidden">New alerts</span>
                                                </span>
                                            </>
                                        }
                                    </>
                                } id="collasible-nav-dropdown">

                                    <div className="d-flex flex-column">
                                        <p className=" fst-itali text-start fw-light fs-5 mx-2 border-bottom">Lista de Deseos:</p>

                                        {heart.map(el => (

                                            <Wishlist
                                                el={el}
                                            />
                                        ))}

                                        {heart.length === 0 && <p className="text-center text-muted">Lista Vacía</p>}

                                    </div>
                                </NavDropdown>
                            </div>

                            <NavLink to={'/checkout'} className="name pb-3">
                                <Nav.Link href="#deets" className=" mx-2 fs-6">
                                    {calcularCantidad() > 0 && <CartWidget />}
                                </Nav.Link>
                            </NavLink>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
}

export default NavBar;