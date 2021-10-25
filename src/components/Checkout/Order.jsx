import React,{useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import {Button, Modal } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Order = () => {

    const{showOrder, handleCloseOrder }= useContext(CartContext)

    return (

        <Modal
            show={showOrder}
            onHide={handleCloseOrder}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title>Gracias por tu comprar en Vida Sana</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Tu pedido esta confirmado, retirar con el ID: 
              
            </Modal.Body>
            <Modal.Footer>
                <Link to='/'>
                <Button variant="secondary" onClick={handleCloseOrder}>
                    Volver Inicio
                </Button>
                </Link>
               
            </Modal.Footer>
        </Modal>

    );
}

export default Order;