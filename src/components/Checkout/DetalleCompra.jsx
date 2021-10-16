import React from 'react';

const Detalle = ({ productos }) => {

    console.log(productos)

    return (
        <>
            <h4 className="mb-3 d-flex justify-content-between align-items-center">

                <span className="text-muted fs-2 fw-lighter">Tu carrito</span>

                <span className="badge bg-secondary rounded-pill">3</span>
            </h4>


            <ul className="list-group mb-3 shadow bg-body rounded">
                {productos.map(producto => (
                    <>
                        <li className="list-group-item d-flex justify-content-between">
                            <div>
                                <h6 className="my-0 fw-bold">{producto.name} </h6>
                                <span className="text-muted fs-6 fw-light">cantidad: x</span>
                            </div>
                            <span className="text-muted">${producto.price}</span>
                        </li>

                    </>
                ))}
            </ul>

            {/* <form action="" className="card p-2 shadow bg-body rounded">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Cupon" />
                    <div className="input-group-append">
                        <button className="btn btn-secondary">Canjear</button>
                    </div>
                </div>
            </form> */}

            <li className="list-group-item d-flex justify-content-between shadow bg-body rounded">
                            <div>
                                <h6 className="my-0 fw-bold">Total</h6>

                            </div>
                            <span className="text-muted">$</span>
                        </li>


            <div className="col-12 d-flex justify-content-center ">

                <button className="btn btn-outline-secondary mt-3 px-5 shadow rounded">Comprar</button>
            </div>


        </>
    );
}

export default Detalle;