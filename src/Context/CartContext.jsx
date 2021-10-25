import React, { useState, createContext, useContext, useEffect } from 'react';
import { ItemsContext } from './ItemsContext';
import { FirebaseContext } from '../firebase';



export const CartContext = createContext()

const CartProvider = (props) => {

    
    const {firebase}= useContext(FirebaseContext)

    const init = JSON.parse(localStorage.getItem('carrito')) || []
   

    const [carrito, setCarrito] = useState(init)
    const [total, setTotal] = useState(0)


    const { productos } = useContext(ItemsContext)
    
    

    const addCarrito = (data) => {

        setCarrito([...carrito, data])

    }

    const removeItem = id => {
        const newCarrito = carrito.filter(el => el.id !== id)
        setCarrito(newCarrito)
    }

    const isInCart = id => {
        return carrito.some(el => el.id === id)
    }

    const calcularCantidad = () => {
        return carrito.reduce((acc, el) => acc + el.cantidad, 0)
    }
    const vaciarCarrito = (e) => {
        e.stopPropagation()
        setCarrito([])
    }



    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])


    useEffect(() => {
        const obtenerTotal = () => {
            const resultado = carrito.reduce((acc, el) => {
                return acc + (el.price * el.cantidad)
            }, 0)

            setTotal(resultado)
        }
        obtenerTotal()
    }, [carrito])


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [showTerminos, setShowTerminos] = useState(false);

    const handleCloseTerminos = () => setShowTerminos(false);
    const handleShowTerminos = () => setShowTerminos(true);

  
    const [showOrder, setShowOrder] = useState(false);

    const handleCloseOrder = () =>{
        setShow(false)
        setShowOrder(false)
        setCarrito([])
      
    } 
    const handleShowOrder = () => {
        setShow(false)
        setShowOrder(true)
    }

    const [orderClient, setOrderClient] = useState({
        nombre:'',
        apellido:'',
        email:'',
        telefono:'',
        ciudad:'',
        provincia:'',
        comentarios:'',
        creado: Date.now(),
        
    })

    const handleChangeCliente = e => {
        e.preventDefault()
        setOrderClient({
            ...orderClient,
            [e.target.name]:  e.target.value
        })
    }
    const [orderId, setOrderId ] =useState()


    const crearOrden = ()=>{

        try {
            const orden = {
                cliente: orderClient,
                productos:[...carrito],
                totalPagar: total,
                
            }
    
            firebase.db.collection('ordenes').add(orden).then(({id})=>{
                setOrderId(id)
            })
            .catch((error)=>{
                console.log(error)
            })


            
        } catch (error) {
            console.log(error);
        }
        




    }

        
     



    return (
        <CartContext.Provider
            value={{
                show,
                showOrder,
                showTerminos,
                productos,
                carrito,
                total,
                orderId,
                isInCart,
                calcularCantidad,
                addCarrito,
                setCarrito,
                removeItem,
                setTotal,
                vaciarCarrito,
                handleShow,
                handleClose,
                handleCloseOrder,
                handleShowTerminos,
                handleCloseTerminos,
                handleShowOrder,
                setShowOrder,
                handleChangeCliente,
                crearOrden,
               
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;