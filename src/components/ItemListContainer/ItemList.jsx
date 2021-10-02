import React from 'react';
import Item from './Item'


const ItemList = ({items}) => {

    if(Object.keys(items).length ===0) return null
  
    return ( 

       


            <div className="container">
             

                <div className="row d-flex justify-content-center align-items-center">
               

                    {items.map(item => (
                        <Item
                            item={item}
                        />
                    ))}
                </div>
        

            </div>
     

    
      
     );
}
 
export default ItemList;