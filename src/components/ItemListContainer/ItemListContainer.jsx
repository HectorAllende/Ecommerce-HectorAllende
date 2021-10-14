import React, { useContext, useEffect } from 'react'
import ItemList from './ItemList'
import Spinner from '../Spinner/Spinner'
import { ItemsContext } from '../../Context/ItemsContext'
import { useParams } from 'react-router'
import scrollTop from '../utils/scrollTop'



const ItemListContainer = ({ titulo }) => {

  const { items, cargando, setCategory } = useContext(ItemsContext)

  const { category } = useParams()
  setCategory(category)

  const componente = cargando ? <Spinner /> : <ItemList items={items} />

  useEffect(() => {
    scrollTop()
  }, [])

  return (

    <>
      {cargando ? <Spinner /> : (

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
      )}
    </>

  );
}

export default ItemListContainer;