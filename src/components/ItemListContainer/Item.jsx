import React, { useEffect, useContext } from 'react';
import { ItemsContext } from '../../Context/ItemsContext';
import { Card, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import scrollTop from '../utils/scrollTop';


const Item = ({ item }) => {

    const { cargando } = useContext(ItemsContext)

    const { id, name, price, img1, description, category } = item

    useEffect(() => {
        scrollTop()
    }, [])

    return (
        <>
            {cargando ? <p>Cargando...</p> : (

                <Card style={{ width: '18rem' }} className="m-3 text-center g-0 shadow bg-body rounded">

                    <NavLink to={`/item/${id}`}>
                        <Card.Img variant="top" src={img1} />
                    </NavLink>

                    <Card.Body>

                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
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