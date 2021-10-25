import React,{useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import {Button, Modal } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Order = () => {

    const{showOrder, handleCloseOrder, orderId }= useContext(CartContext)

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
              <p>Tu pedido esta confirmado, puedes retirar con este ID:</p> 
              <p className="fs-6 fw-bolder" >{orderId} </p>
              <p className="text-muted fs-sm">Conserve este código ya que le será solicitado</p>
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