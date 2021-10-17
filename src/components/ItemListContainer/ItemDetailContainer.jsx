import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ItemsContext } from '../../Context/ItemsContext';
import { CartContext } from '../../Context/CartContext';
import { Button } from 'react-bootstrap'
import scrollTop from '../utils/scrollTop';
import { Breadcrumb } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import Spinner from '../Spinner/Spinner'
import ItemCount from './ItemCount';



const ItemDetailContainer = () => {

    useEffect(() => {
        scrollTop()
    }, [])

    const { id } = useParams()

    const { itemId, setId, cargando } = useContext(ItemsContext)

    const { addCarrito, isInCart } = useContext(CartContext)

    setId(id)



    const { name, description, price, img1, category, stock } = itemId



    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            id,
            name,
            description,
            price,
            img1,
            category,
            cantidad

        }
        if (cantidad > 0) {
            addCarrito(newItem)
        }

    }



    return (
        <>
            <div className="container">



                {cargando ? <Spinner /> : (


                    <div className="container">
                        <div className="row mt-2">
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">
                                    <NavLink to={`/`}>
                                        Inicio
                                    </NavLink>
                                </Breadcrumb.Item>

                                <Breadcrumb.Item href="#">
                                    <NavLink to={`/productos/`}>
                                        Productos
                                    </NavLink>
                                </Breadcrumb.Item>


                                <Breadcrumb.Item href="#">
                                    <NavLink to={`/productos/${category}`}>
                                        {category}
                                    </NavLink>

                                </Breadcrumb.Item>


                                <Breadcrumb.Item active>{name}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>



                        <div className="row">


                            <div className="col-12 col-md-8 mb-4 p-4 d-flex justify-content-center">
                                <img alt={name} src={img1} className="img-fluid shadow-lg bg-body rounded" width="600" />
                            </div>


                            <div className="col-12 col-md-4 mb-4 p-4 ">
                                <h1 className="display-5 lead">{name}</h1>
                                <p className="fs-3 lead">{description}</p>
                                <p className="text-muted fs-3">${price}</p>

                                {isInCart(id)
                                    ?
                                    <>

                                        <div className="d-flex flex-column col-12 col-md-6">


                                            <Link to="/productos" className="btn btn-outline-secondary rounded-pill mb-3 btn-sm">Seguir comprando</Link>
                                            
                                            <Link to="/checkout" className="btn btn-success rounded-pill btn-sm">Terminar compra</Link>



                                        </div>


                                    </>
                                    :
                                    <>
                                        <div className="d-flex flex-column justify-content-start align-items-start mb-2">
                                            <ItemCount
                                                cantidad={cantidad}
                                                setCantidad={setCantidad}
                                                stock={stock}
                                            />

                                            <p className="text-muted fs-sm mt-2 fw-lighter">Stock: {stock} unidades.</p>

                                        </div>

                                        <div className="col-12 col-md-6">
                                            <Button variant="outline-secondary px-3 rounded-pill btn-sm" onClick={handleAgregar} >Agregar al carrito</Button>

                                        </div>
                                    </>
                                }
                            </div>



                        </div>

                    </div>
                )}
            </div>
        </>
    );
}

export default ItemDetailContainer;