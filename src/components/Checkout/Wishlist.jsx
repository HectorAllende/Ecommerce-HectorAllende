import React, { useContext } from 'react';
import { NavDropdown } from 'react-bootstrap'
import { HeartContext } from '../../Context/HeartContext';
import { CartContext } from '../../Context/CartContext';

const Wishlist = ({ el }) => {

    const { removeItem } = useContext(HeartContext)
    const { addCarrito, isInCart } = useContext(CartContext)

    return (
            

        <NavDropdown.Item className="count--button">
            <div className="row shadow bg-body rounded px-1 count--button">
                
           
             
                <div className="col-12 d-flex align-items-stretch count--button">

                    <div className="col-4 d-flex align-items-center count--button mt-2">
                        <img src={el.img1} alt={el.name} width="60rem" height="50rem" className="" />
                    </div>

                    <div className="col-5 d-flex flex-column mx-1 text-center lh-1 py-1">

                        
                   
                        <p className="fw-light fw-bold text-muted">${el.price}</p>

                    </div>

                    <div className="d-flex flex-column col-2 count--button">

                        <button className=" count--button text-danger d-block" onClick={() => removeItem(el.id)}><box-icon name='window-close' color="grey" size="sm"></box-icon></button>

                    </div>


                </div>

                <p className="fw-light fs-6 mt-1">{el.name}</p>


                {isInCart(el.id) ?
                    <>
                     
                        <p className="text-muted fs-sm fw-light mt-1">Producto ya agregado al carrito</p>
                       

                    </>
                    :
                    <>
              
                        <button
                            onClick={() => {
                                addCarrito(el);
                                removeItem(el.id)
                            }}
                            className="btn btn-outline-secondary  rounded-pill btn-sm mb-2">Agregar al carrito </button>

                    </>


                }
          

              
            </div>

        </NavDropdown.Item>


     );
}
 
export default Wishlist ;