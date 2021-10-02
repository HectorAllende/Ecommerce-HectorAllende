import React from 'react';
import { Card, Button } from 'react-bootstrap'


const Item = ({ item }) => {

    const { id, name, price, img, description } = item

    console.log(item)
    return (
        <>
            

                <Card style={{ width: '18rem'}} className="m-3 text-center g-0">                      
    
             
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>Precio: ${price}</Card.Text>

                        <Button variant="btn btn-sm btn-outline-secondary mx-3" className="text-center">Agregar</Button>

                    </Card.Body>       

       
               
                </Card>

            
           


      

      



          



        </>
    );
}

export default Item;