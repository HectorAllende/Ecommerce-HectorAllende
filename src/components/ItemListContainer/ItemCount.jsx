import React from 'react';
import './carrito.css'


const ItemCount = ({cantidad, setCantidad, stock}) => {



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

                <button className="count--button d-flex align-items-center" id="bootstrap-overrides" onClick={restarItem}>
                    {cantidad === 1 ? <box-icon name='chevrons-left' color="gray"></box-icon> : <box-icon name='chevrons-left'></box-icon>}
                </button>


                <p className="text-center d-flex justify-content-center align-items-center m-0 text-muted fs-6">{cantidad}</p>


                <button className="count--button  d-flex align-items-center" onClick={aumentarItem}>

                    {cantidad === stock ? <box-icon name='chevrons-left' rotate='180' color="gray" ></box-icon> : <box-icon name='chevrons-left' rotate='180' ></box-icon>}

                </button>
            </div>
        </>
      );
}
 
export default ItemCount;