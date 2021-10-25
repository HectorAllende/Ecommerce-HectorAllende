import React,{useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import FormOrder from './FormOrder';
import Order from './Order'
import Terminos from './Terminos';

const Detalle = () => {

    const { carrito, total, calcularCantidad, vaciarCarrito , handleShow, handleShowOrder} = useContext(CartContext)

    return (
        <>
            <h4 className="mb-3 d-flex justify-content-between align-items-center">

                <span className="text-muted fs-2 fw-lighter">Tu carrito</span>

                <span className="badge bg-secondary rounded-pill">{calcularCantidad()}</span>
            </h4>


            <ul className="list-group mb-3 shadow bg-body rounded">
                {carrito.map(el => (
                    <>
                        <li className="list-group-item d-flex justify-content-between">
                            <div>
                                <h6 className="my-0 fw-bold">{el.name} </h6>
                                <span className="text-muted fs-6 fw-light">cantidad: {el.cantidad}</span>
                            </div>
                            <span className="text-muted">${el.price * el.cantidad}</span>
                        </li>

                    </>
                ))}
            </ul>

 
            <li className="list-group-item d-flex justify-content-between shadow bg-body rounded">
                            <div>
                                <h6 className="my-0 fw-bold">Total</h6>

                            </div>
                            <span className="text-muted">${total}</span>
                        </li>


            <div className="d-grid gap-2 col-6 mx-auto mt-4 ">
                <button className="btn btn-outline-secondary shadow rounded-pill btn-sm" onClick={vaciarCarrito}>Vaciar Carrito</button>

                <button 
                    onClick={handleShow}
                className="btn btn-success shadow rounded-pill mt-3 btn-sm">Comprar</button>
                    


            </div>

            <FormOrder/>
            <Order/>
            <Terminos/>



        </>
    );
}

export default Detalle;