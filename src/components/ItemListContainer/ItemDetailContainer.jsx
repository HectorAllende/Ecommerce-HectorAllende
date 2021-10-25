import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { ItemsContext } from '../../Context/ItemsContext';
import { CartContext } from '../../Context/CartContext';
import { HeartContext } from '../../Context/HeartContext';
import { Button } from 'react-bootstrap'
import scrollTop from '../utils/scrollTop';
import { Breadcrumb } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import Spinner from '../Spinner/Spinner'
import ItemCount from './ItemCount';
import './carrito.css'


const ItemDetailContainer = () => {

    useEffect(() => {
        scrollTop()
    }, [])

    const { id } = useParams()

    const { itemId, setId, cargando, cantidad, setCantidad  } = useContext(ItemsContext)

    const { addCarrito, isInCart } = useContext(CartContext)
    const { addHeart, isInHeart, removeItem } = useContext(HeartContext)

    setId(id)



    const { name, description, price, img1, category, stock } = itemId





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

    const handleHeart = () => {
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

            addHeart(newItem)

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
                                        <div className="d-flex">


                                            <div className="d-flex flex-column justify-content-start align-items-start mb-2">
                                                <ItemCount
                                                    cantidad={cantidad}
                                                    setCantidad={setCantidad}
                                                    stock={stock}
                                                />


                                                <p className="text-muted fs-sm mt-2 fw-lighter">Stock: {stock} unidades</p>

                                            </div>

                                            {!isInHeart(id) 
                                            ?
                                                <>

                                                    <div className="d-flex align-items-star mt-1 align-self-start heart">

                                                        <svg onClick={handleHeart} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                        </svg>

                                                    </div>
                                                </>
                                                :

                                                <>
                                                    <div className="d-flex align-items-star mt-1 align-self-start heart">

                                                        <svg onClick={()=>removeItem(id)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart-fill heart1" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                        </svg>
                                                    </div>

                                                </>

                                            }
                                        </div>


                                        <div className="col-12 col-md-8 d-flex flex-column ">

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