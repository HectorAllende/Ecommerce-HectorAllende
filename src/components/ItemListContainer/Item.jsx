import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';


const Item = ({ item }) => {

    const { id, name, price, img, description } = item

    console.log(item.img)
    
    return (
        <>


            <Card style={{ width: '18rem' }} className="m-3 text-center g-0">

                <NavLink to={`/item/${id}`}>
                    <Card.Img variant="top" src={img} />
                </NavLink>




                <Card.Body>

                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Precio: ${price}</Card.Text>

                    <NavLink to={`/item/${id}`}>
                        <Button variant="btn btn-sm btn-outline-secondary mx-3" className="text-center">Ver producto</Button>


                    </NavLink>



                </Card.Body>



            </Card>















        </>
    );
}

export default Item;