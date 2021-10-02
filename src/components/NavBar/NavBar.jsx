import React from 'react'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <>

            <div class="bg-dark collapse" id="navbarHeader">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-8 py-4">
                            <h4 class="text-white">Acerca de</h4>
                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem magni eaque voluptates, amet dolor vel nihil asperiores aliquam sit ullam cum inventore. Laudantium neque esse adipisci magnam, placeat fugit iusto?</p>
                        </div>
                        <div class="col-12 col-sm-4 py-4">
                            <h4 class="text-white">Productos</h4>
                            <ul class="list-unstyled">
                                <li><a href="#" class="text-white">Alimentos</a></li>
                                <li><a href="#" class="text-white">Bebidas</a></li>
                                <li><a href="#" class="text-white">Panes</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <nav class="navbar navbar-dark bg-dark ">
                <div class="container">
                    <a href="#" class="navbar-brand d-flex align-items-center">
                        
                        <strong>Ecommerce- Vida Sana</strong>
                    </a>
                    <button
                        class="navbar-toggler collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarHeader"
                        aria-controls="navbarHeader"
                        aria-expanded="false"
                        aria-label="Alternar Navegacion"
                    >
                        <span class="navbar-toggler-icon"></span>
                        <CartWidget/>

                    </button>
                </div>
            </nav>



        </>



     );
}
 
export default NavBar;