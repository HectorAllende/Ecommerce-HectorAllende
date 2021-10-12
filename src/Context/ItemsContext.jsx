import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const ItemsContext = createContext()

const ItemsProvider = (props) => {


    const [items, setItems] = useState([])
    const [cargando, setCargando] = useState(false)
    const [category, setCategory] = useState()

    useEffect(() => {

        const obtenerProductos = async () => {
            const url = 'http://localhost:4000/items'

            const resultado = await axios.get(url)

            setCargando(true)

            setTimeout(() => {

                setCargando(false)

                if (category) {
                    setItems(resultado.data.filter(el => el.category = category))
                } else {
                    setItems(resultado.data)
                }

            }, 1000);
        }
        obtenerProductos()

    }, [category])

    return (
        <ItemsContext.Provider
            value={{
                items,
                cargando,
                setCategory,
            }}
        >

            {props.children}
        </ItemsContext.Provider>
    );
}

export default ItemsProvider;