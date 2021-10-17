import React,{useContext} from 'react'
import { CartContext } from '../../Context/CartContext';


const Carrito = () => {

    const {calcularCantidad} = useContext(CartContext)

    return (
        <div className="row">
            <div className="col-12 d-flex flex-column ">

                <div className="col-12 offset-3">

                    {calcularCantidad()>0 && <span className="badge bg-secondary rounded-pill offset-4">{calcularCantidad()}</span>}              
                    
                </div>   

                <box-icon name='cart' color="white" size="md" className="align-top text-start"></box-icon>   
               



            </div>


        </div>
    );
}

export default Carrito;