import React, { useState } from 'react';
import './carrito.css'


const ItemCount = ({inicial, stock}) => {

    const [cantidad, setCantidad]= useState(inicial)

    const aumentarItem=()=>{
        setCantidad(cantidad =>{
            let sumar = cantidad < stock ? (cantidad + 1): cantidad
            return sumar
        })
    }

    const restarItem=()=>{
        setCantidad(cantidad =>{
            let restar = cantidad <= 1 ? 1 : (cantidad-1)
            return restar
        })
    }


    return (

        <>
            <div className="d-flex border border-2 rounded-pill">
                <button className="count--button" id="bootstrap-overrides" onClick={restarItem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>                    
                </button>

                <p className=" d-flex align-items-center m-0 text-muted fs-6">{cantidad}</p>

                <button className="count--button" onClick={aumentarItem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>

                </button>
            </div>
        </>
      );
}
 
export default ItemCount;