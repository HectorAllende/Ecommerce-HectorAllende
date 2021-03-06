import React, { useEffect, useContext } from 'react';
import { ItemsContext } from '../../Context/ItemsContext';
import { Card, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import scrollTop from '../utils/scrollTop';
import './carrito.css'


const Item = ({ item }) => {

    const { cargando } = useContext(ItemsContext)

    const { id, name, price, img1, category } = item

    useEffect(() => {
        scrollTop()
    }, [])

    return (
        <>
            {cargando ? <p>Cargando...</p> : (

                <Card style={{ width: '20rem' }} className="m-3 text-center g-0 shadow bg-body rounded card ">

                    <NavLink to={`/item/${id}`}>
                        <Card.Img variant="top" src={img1} className="imagen1" />
                    </NavLink>

                    <Card.Body className="card-2">

                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Categoría: {category}</Card.Text>
                        <Card.Text>Precio: <span className="text-muted fw-bold">${price} </span></Card.Text>

                        <NavLink to={`/item/${id}`}>
                            <Button variant="btn btn-sm btn-outline-secondary mx-3 rounded-pill" className="text-center shadow-sm rounded px-4">Ver producto</Button>
                        </NavLink>
                    </Card.Body>
                </Card>

            )}
        </>
    );
}

export default Item;