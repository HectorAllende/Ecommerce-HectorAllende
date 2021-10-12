import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { ItemsContext } from '../../Context/ItemsContext';
import { Button } from 'react-bootstrap'
import scrollTop from '../utils/scrollTop';
import { Breadcrumb } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Spinner from '../Spinner/Spinner'



const ItemDetailContainer = () => {

    useEffect(() => {
        scrollTop()
    }, [])

    const { id } = useParams()

    const { itemId, setId, cargando } = useContext(ItemsContext)

    setId(id)

    // const itemId = items.filter(el => el.id === parseInt(id))[0]

    const { name, description, price, img1, category } = itemId

    return (
        <>

            {cargando ? <Spinner/> : (


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



                    <div className="row pt-5 mb-4">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-3  ">
                            <img alt={name} src={img1} />
                        </div>
                        <div className="col-12 col-md-6 py-5 d-flex flex-column justify-content-center ">
                            <h1 className="display-5 lead">{name}</h1>
                            <p className="fs-3 lead">{description}</p>
                            <p className="text-muted fs-3">${price}</p>

                            <div className="col-12 col-md-6">
                                <Button variant="outline-secondary" className="">Agregar al carrito</Button>{' '}
                            </div>


                        </div>

                    </div>

                </div>
            )}
        </>
    );
}

export default ItemDetailContainer;