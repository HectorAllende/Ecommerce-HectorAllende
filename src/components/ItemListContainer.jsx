import React from 'react'


const ItemListContainer = ({titulo}) => {
    return (
        <>
            <div className="container">
              <div className="row">
                  <div className="col text-center py-5">
                     <h1>{titulo}</h1> 
                  </div>
              </div>

            </div>
        </>

      );
}
 
export default ItemListContainer;