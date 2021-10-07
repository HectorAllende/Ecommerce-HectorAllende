import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios'


export const ItemsContext = createContext()

const ItemsProvider = (props) => {
    const [items, setItems]= useState([])
    const [cargando, setCargando]= useState(false)
    
    

    useEffect(() => {

      const obtenerProductos= async()=>{
        const url = 'http://localhost:4000/items'

        const resultado = await axios.get(url)

        setCargando(true)

        setTimeout(() => {

            setCargando(false)
            setItems(resultado.data)
          
        }, 2000); 
        

        
      }
      obtenerProductos()

    }, [])

    return ( 
        <ItemsContext.Provider
            value={{
                items,
                cargando,
 
            
            }}
        >
            
            {props.children}
        </ItemsContext.Provider>
     );
}
 
export default ItemsProvider;