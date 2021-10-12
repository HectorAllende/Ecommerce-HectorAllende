import React from 'react';

const Checkout = () => {
    return (

        <>
            <div className="container">
                <div className="row d-flex justify-content-center m-3 ">

                    <div className="col-12 col-md-6 mb-3">
                        <h4 className="mb-3 d-flex justify-content-between align-items-center">

                            <span className="text-muted">Tu carrito</span>

                            <span className="badge bg-secondary rounded-pill">3</span>
                        </h4>

                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between">
                                <div>
                                    <h6 className="my-0">Nombre del Producto</h6>
                                    <small className="text-muted">Pequeña descripcion</small>
                                </div>
                                <span className="text-muted">$12</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <div>
                                    <h6 className="my-0">Segundo Producto</h6>
                                    <small className="text-muted">Pequeña Descripcion</small>
                                </div>
                                <span className="text-muted">$8</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <div>
                                    <h6 className="my-0">Tercer Producto</h6>
                                    <small className="text-muted">Pequeña Descripcion</small>
                                </div>
                                <span className="text-muted">$5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-light">
                                <div className="text-success">
                                    <h6 className="my-0">Codigo de descuento</h6>
                                    <small className="text-success">CUPONEJEMPLO</small>
                                </div>
                                <span className="text-success">$-5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (ARS)</span>
                                <strong>$20</strong>
                            </li>
                        </ul>

                        <form action="" className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Cupon" />
                                <div className="input-group-append">
                                    <button className="btn btn-secondary">Canjear</button>
                                </div>
                            </div>
                        </form>

                        <div className="col-12 d-flex justify-content-center">

                        <button className="btn btn-outline-secondary mt-2 px-5 ">Comprar</button>
                        </div>

                        
                 

                    </div>
                </div>


            </div>


        </>
    );
}

export default Checkout;