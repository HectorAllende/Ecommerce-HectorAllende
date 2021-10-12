import React, { useEffect, useContext } from 'react';
import Item from './Item'
import { ItemsContext } from '../../Context/ItemsContext';
import scrollTop from '../utils/scrollTop';
import { Breadcrumb } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';

const ItemList = ({ items }) => {

    const { cargando } = useContext(ItemsContext)

    useEffect(() => {
        scrollTop()
    }, [])

    const { category } = useParams()


    if (Object.keys(items).length === 0) return null



    const componente = category ? (
        <>
            <Breadcrumb.Item href="#">
                <NavLink to={`/productos/`}>
                    Productos
                </NavLink>
            </Breadcrumb.Item>


            <Breadcrumb.Item active>{category}</Breadcrumb.Item>

        </>


    ) : (<Breadcrumb.Item active>Productos</Breadcrumb.Item>)


    return (

        <>

            {cargando ? <p>Cargando...</p> : (

                <div className="container">

                    <div className="row mt-2">
                        <Breadcrumb>

                            <Breadcrumb.Item href="#">
                                <NavLink to={`/`}>
                                    Inicio
                                </NavLink>
                            </Breadcrumb.Item>





                            {componente}


                        </Breadcrumb>
                    </div>


                    <div className="row d-flex justify-content-center align-items-center">


                        {items.map(item => (
                            <Item
                                item={item}
                            />
                        ))}
                    </div>


                </div>
            )}

        </>




    );
}

export default ItemList;