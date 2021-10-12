import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const ItemsContext = createContext()

const ItemsProvider = (props) => {


    const [items, setItems] = useState([])
    const [cargando, setCargando] = useState(false)
    const [category, setCategory] = useState()

    const [id, setId] = useState()
    const [itemId, SetItemId] = useState([])

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

            const includesId = resultado.data.filter(el => el.id === parseInt(id))[0]
            if (includesId) {
                SetItemId(includesId)
            }
        }
        obtenerProductos()

    }, [id, category])

    return (
        <ItemsContext.Provider
            value={{
                items,
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