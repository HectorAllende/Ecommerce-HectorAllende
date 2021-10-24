import React, { createContext, useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase';

export const ItemsContext = createContext()

const ItemsProvider = (props) => {

    const [productos, setProductos] = useState([])
    const [items, setItems] = useState([])
    const [cargando, setCargando] = useState(false)
    const [category, setCategory] = useState()
    const [id, setId] = useState()
    const [itemId, SetItemId] = useState([])

    const { firebase } = useContext(FirebaseContext)

    useEffect(() => {
        // eslint-disable-next-line

        const data = sessionStorage.getItem("productos")

        if(data){
            let productos = JSON.parse(data)

            setCargando(true)

            setTimeout(() => {

                setCargando(false)

                if (category) {
                    setItems(productos.filter(el => el.category === category))
                } else {
                    setItems(productos)
                }

            }, 500);

            const includesId = productos.filter(el => el.id === id)[0]
            if (includesId) {
                SetItemId(includesId)
            }

            return setProductos(productos)
        }

        const obtenerProductos = async () => {

            firebase.db.collection('productos').orderBy("category", "asc").onSnapshot(handleSnapshot)

            function handleSnapshot(snapshot) {
                const productos = snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })

                sessionStorage.setItem("productos", JSON.stringify(productos))

                setCargando(true)

                setTimeout(() => {

                    setCargando(false)

                    if (category) {
                        setItems(productos.filter(el => el.category === category))
                    } else {
                        setItems(productos)
                    }

                    setProductos(productos)


                }, 500);

                const includesId = productos.filter(el => el.id === id)[0]
                if (includesId) {
                    SetItemId(includesId)
                }
            }
        }
        obtenerProductos()

        // eslint-disable-next-line
    }, [id, category])
 
    return (
        <ItemsContext.Provider
            value={{
                items,
                productos,
                cargando,
                itemId,
                setCategory,
                setId
            }}
        >

            {props.children}
        </ItemsContext.Provider>
    );
}

export default ItemsProvider;