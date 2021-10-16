import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import Detalle from './DetalleCompra';
// import { box } from 'boxicons'

const Checkout = () => {

    const { carrito, productos, setCarrito } = useContext(CartContext)


    console.log(carrito)

    return (

        <>
            <div className="container">

                {/* Cambiar luego productos por carrito  */}

                {productos.length === 0 ?
                    <>
                        <div className=" row text-center m-6 p-5">
                            <p className="text-muted lead fs-2">Tu carrito esta Vacío</p>
                            <p className="text-muted lead fs-4">Comienza agregando productos :)</p>

                            <div className="my-4">
                                <box-icon name='cart' animation='tada' size="80px" color="gray" ></box-icon>
                            </div>



                        </div>

                    </>
                    :
                    <>
                        <div className="row d-flex">
                            <div className="col-12 col-md-6 d-flex flex-column text-center m-4 p-2">

                                {productos.map(el => (
                                    <div className="container">
                                        <div className="row">

                                            <div className="col-12 border border-2 g-0 m-2 shadow bg-body rounded d-flex justify-content-between ">

                                                <div className="">
                                                    <img src={el.img1} width="150" className="rounded-1 m-2" />
                                                </div>


                                                <div className="mt-4">
                                                    <h3 className="lead">{el.name}</h3>
                                                    <p className="text-muted">{el.description}</p>

                                                    <p className="text-muted lead fs-5 fw-bold">${el.price}</p>
                                                </div>

                                                <div className="">
                                                    <button className="btn text-danger"><box-icon name='window-close' color="grey" size="sm" animation="tada-hover"></box-icon></button>
                                                </div>


                                            </div>

                                       
                                        </div>

                                    </div>
                                ))}
                            </div>

                            <div className="col-12 col-md-4 mx-5 my-2 p-4 text-center">
                                < Detalle
                                    productos={productos}
                                />
                                    
                            </div>


                        </div>


                    </>


                }
            </div>



        </>
    );
}

export default Checkout;