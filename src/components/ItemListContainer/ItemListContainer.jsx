import React, { useContext, useEffect } from 'react'
import ItemList from './ItemList'
import Spinner from '../Spinner/Spinner'
import { ItemsContext } from '../../Context/ItemsContext'
import { useParams } from 'react-router'
import scrollTop from '../utils/scrollTop'



const ItemListContainer = () => {

  const { items, cargando, setCategory } = useContext(ItemsContext)

  const { category } = useParams()
  setCategory(category)



  const componente = cargando ? <Spinner /> : <ItemList items={items} />

  useEffect(() => {
    scrollTop()
  }, [])

  return (

    <>
      <div className="container">

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