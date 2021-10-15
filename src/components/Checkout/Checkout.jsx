import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

import {box} from 'boxicons'

const Checkout = () => {

    const { carrito, productos, setCarrito } = useContext(CartContext)


    console.log(carrito)

    return (

        <>
            <div className="container">


                {carrito.length === 0 ?
                    <>
                        <div className="text-center m-5 p-5">
                            <p className="text-muted lead fs-2">Carrito Vacio</p>

                            <div className="m-4">                                
                                <box-icon name='cart' animation='tada'size="lg" color="gray" ></box-icon>
                            </div>



                        </div>

                    </> 
                    :
                    <>
                        <h1>Desde carrito</h1>
                        {carrito.map(el => (
                            <div className="container">
                                <div className="row">
                                    <div>
                                        <h1>Desde carrito</h1>
                                        <h3>{el.name}</h3>
                                    </div>
                                </div>

                            </div>
                        ))}


                    </>
                }
            </div>



        </>
    );
}

export default Checkout;