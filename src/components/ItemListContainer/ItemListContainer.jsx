import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import axios from 'axios'
import Spinner from '../Spinner/Spinner'



const ItemListContainer = ({titulo}) => {

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

    const componente = cargando ? <Spinner/> : <ItemList items={items}/>
    

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center py-2">
            <h1 className="display-4">{titulo}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col">
            {componente}
          </div>
        </div>

      </div>
    </>

  );
}
 
export default ItemListContainer;