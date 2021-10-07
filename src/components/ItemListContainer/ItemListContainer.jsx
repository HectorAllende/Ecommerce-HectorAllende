import React, {useContext} from 'react'
import ItemList from './ItemList'
import Spinner from '../Spinner/Spinner'
import { ItemsContext } from '../../Context/ItemsContext'



const ItemListContainer = ({titulo}) => {

    const {items, cargando}= useContext(ItemsContext)

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