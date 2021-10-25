import React, { useContext } from 'react';
import {Modal,Button } from 'react-bootstrap'
import { CartContext } from '../../Context/CartContext';

const Terminos = () => {

    const {showTerminos, handleCloseTerminos } =useContext(CartContext)

    return (
        <Modal show={showTerminos} onHide={handleCloseTerminos}>

            <Modal.Header>
                <Modal.Title>Términos y condiciones</Modal.Title>
            </Modal.Header>
            <Modal.Body>El proveedor identificado en el pedido de compra (Vida Sana) acepta vender al cliente, el cual acepta comprar los productos identificados en el pedido de compra, en el que se incluyen estos términos y condiciones (conjuntamente, el “Pedido”). Aunque el Vendedor puede acusar recibo de este Pedido mediante su firma y reenvío, los términos y condiciones del Vendedor de una documentación de acuse de recibo del pedido, factura u otro documento por escrito, preimpreso o en cualquier otro formato, serán inaplicables y no modificarán este Pedido.</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseTerminos}>
                    Cerrar
                </Button>
             
            </Modal.Footer>
        </Modal>
    );
}
 
export default Terminos;