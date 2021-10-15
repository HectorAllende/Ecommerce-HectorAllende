import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Card } from 'react-bootstrap'

import { box } from 'boxicons'

const Checkout = () => {

    const { carrito, productos, setCarrito } = useContext(CartContext)


    console.log(carrito)

    return (

        <>
            <div className="container">

                {/* Cambiar luego productos por carrito  */}

                {productos.length === 0 ?
                    <>
                        <div className=" row text-center m-5 p-5">
                            <p className="text-muted lead fs-2">Carrito Vacio</p>

                            <div className="m-4">
                                <box-icon name='cart' animation='tada' size="lg" color="gray" ></box-icon>
                            </div>



                        </div>

                    </>
                    :
                    <>
                        <div className="row">
                            <div className="col-12 d-flex flex-column text-center">

                                {productos.map(el => (
                                    <div className="container">
                                        <div className="row">
                                            <div>
                                                <img src={el.img1} width="150" />
                                                <h3>{el.name}</h3>

                                               
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>



                    </>
                }
            </div>



        </>
    );
}

export default Checkout;