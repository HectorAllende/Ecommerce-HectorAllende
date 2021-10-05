import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ItemsContext } from '../../Context/ItemsContext';
import {Button } from 'react-bootstrap'



const ItemDetailContainer = () => {



    const { id } = useParams()

  
    const { items } = useContext(ItemsContext)
 

    const producto = items.filter(el => el.id === parseInt(id))[0]


    const { name, description, price, img } = producto


    return (
        <>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-3  ">
                        <img alt={name} src={{img}}/>
                    </div>
                    <div className="col-12 col-md-6 py-5 d-flex flex-column justify-content-center ">
                        <h1 className="display-5 lead">{name}</h1>
                        <p className="fs-3 lead">{description}</p>
                        <p className="text-muted fs-3">${price}</p>
                        <div className="col-6">
                        <Button variant="outline-secondary"className="rounded">Agregar al carrito</Button>{' '}
                        </div>

                  
                    </div>

                </div>

            </div>
        </>
    );
}
 
export default ItemDetailContainer;