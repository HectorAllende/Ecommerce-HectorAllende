import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import {Button, Modal } from 'react-bootstrap'
import Formulario from './Formulario';


const FormOrder = () => {
    const{show, handleClose }= useContext(CartContext)

    return (

        
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Completa tus datos</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Formulario/>


                </Modal.Body>
               
                <Modal.Footer>
                    <Button variant="secondary shadow rounded-pill mt-3 btn-sm" onClick={handleClose}>
                        Seguir comprando
                    </Button>
             
                </Modal.Footer>

            
            </Modal>
        </>
    );
}
 
export default FormOrder;