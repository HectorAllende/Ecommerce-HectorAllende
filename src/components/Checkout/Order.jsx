import React,{useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import {Button, Modal } from 'react-bootstrap'


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
                <Modal.Title>Gracias por tu compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Retira tu pedido con el numero de ID: .
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseOrder}>
                    Volver a Inicio
                </Button>
               
            </Modal.Footer>
        </Modal>

    );
}

export default Order;