import React, { useState, createContext, useContext, useEffect } from 'react';
import { ItemsContext } from './ItemsContext';

export const CartContext = createContext()

const CartProvider = (props) => {

    // const [productos1, setProductos1]= useState([])
    const [carrito, setCarrito]= useState([])
    const [total, setTotal]= useState(0)

    const {productos}= useContext(ItemsContext)


    const addCarrito = id =>{
        // Verifica si el carrito no tiene ese id
        const check = carrito.every(el =>{
            return el.id !==id
        })
        
        if(check){
            const data = productos.filter(el => el.id === id)
            setCarrito([...carrito, ...data])
        }else{
            alert("El producto se ha añadido al carrito")
        }
    }

    useEffect(()=>{
        const obtenerTotal=()=>{
            const resultado = carrito.reduce((acc,el)=>{
                return acc +(el.price * el.cantidad)
            },0)

            setTotal(resultado)
        }
        obtenerTotal()
    },[carrito])
    
    // const value = {
    //     productos: [productos],
    //     carrito:[carrito, setCarrito],
    //     total:[total, setTotal],
    //     addCarrito:addCarrito
    // }


    return ( 
        <CartContext.Provider
            value={{
                productos,
                carrito,
                total,
                addCarrito,
                setCarrito
            }}
        >
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;