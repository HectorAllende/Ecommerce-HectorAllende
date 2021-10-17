import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../Context/CartContext';
import Detalle from './DetalleCompra';
import './carrito.css';
import scrollTop from '../utils/scrollTop';
import { Link } from 'react-router-dom';

const Checkout = () => {

    useEffect(() => {
        scrollTop()
    }, [])

    const { carrito, removeItem } = useContext(CartContext)


    return (

        <>
            <div className="container">
                <div className="row">
                
                    {carrito.length === 0 ?
                        <>
                            <div className=" row text-center m-6 p-5">
                                <p className="text-muted lead fs-2">Tu carrito esta Vacío</p>
                                <p className="text-muted lead fs-4">Comienza agregando productos :)</p>
                        

                                <div className="my-4">
                                    <Link to={`/productos/`}>
                                    
                                    <box-icon name='cart' animation='tada' size="80px" color="gray" ></box-icon>
                                    </Link>
                                </div>

                            </div>

                        </>
                        :
                        <>
                            <div className="row d-flex">

                                <div className="col-12 col-md-6 d-flex flex-column text-center my-5">

                                    {carrito.map(el => (
                                        <div className="container">
                                            <div className="row">

                                                <div className="col-12 border border-2 g-0 m-2 shadow bg-body rounded d-flex justify-content-between ">

                                                    <div className="">
                                                        <img src={el.img1} width="150" className="rounded-1 m-2" alt={el.name} />
                                                    </div>


                                                    <div className="mt-4">
                                                        <h3 className="lead">{el.name}</h3>
                                                        <p className="text-muted">{el.description}</p>

                                                        <p className="text-muted lead fs-5 fw-bold"> ${el.price}</p>

                                                    </div>


                                                    <div className="">
                                                        <button className=" count--button text-danger" onClick={() => removeItem(el.id)}><box-icon name='window-close' color="grey" size="sm"></box-icon></button>
                                                    </div>


                                                </div>


                                            </div>

                                        </div>
                                    ))}
                                </div>

                                <div className="col-11 col-md-4 text-center my-3 offset-1">

                                    < Detalle />

                                </div>


                            </div>


                        </>


                    }
                </div>
            </div>



        </>
    )
}

export default Checkout;