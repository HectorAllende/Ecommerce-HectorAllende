import React, { useState, createContext, useContext, useEffect } from 'react';
import { ItemsContext } from './ItemsContext';


export const CartContext = createContext()

const CartProvider = (props) => {

    const init = JSON.parse(localStorage.getItem('carrito'))|| []

  
    const [carrito, setCarrito]= useState(init)
    const [total, setTotal]= useState(0)
    
 
    const {productos}= useContext(ItemsContext)
    


    const addCarrito = (data) => {
 
        setCarrito([...carrito, data])
        console.log(data)
    }

    
    const removeItem= id =>{
        const newCarrito = carrito.filter(el => el.id !== id)
        setCarrito(newCarrito)
    }

    const isInCart= id =>{
        return carrito.some(el => el.id === id)
    }

    const calcularCantidad = () => {
        return carrito.reduce((acc, el) => acc + el.cantidad, 0)
    }
    const vaciarCarrito = (e)=>{
        e.stopPropagation()
        setCarrito([])
    }



    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(carrito))
    },[carrito])


    useEffect(()=>{
        const obtenerTotal=()=>{
            const resultado = carrito.reduce((acc,el)=>{
                return acc +(el.price * el.cantidad)
            },0)

            setTotal(resultado)
        }
        obtenerTotal()
    },[carrito])    



    return ( 
        <CartContext.Provider
            value={{
             
                productos,
                carrito,
                total,
                isInCart,
                calcularCantidad,
                addCarrito,
                setCarrito,
                removeItem,
                setTotal,
                vaciarCarrito
           
            }}
        >
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;