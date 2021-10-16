import React, { useEffect } from 'react';
import './Home.css'
import scrollTop from '../utils/scrollTop';


const Home = () => {

    useEffect(()=>{
        scrollTop()
    })

    return (
        <div className="container .bg-light">
            <div className="row d-flex justify-content-center align-items-center mb-5">
                <div className="col-12 col-md-6 mt-5 titulo">

                    <p className="fs-3 text-muted">Somos <span className="fs-2 mx-2 fw-bold lead text-success ">Vida Sana</span></p>
                    <p className="fs-3 text-muted ">Productos Naturales & Orgánicos</p>
                    <p className="fs-3 text-muted ">Cuidando al medio ambiente</p>
                </div>

                <div className="col-12 col-md-6 mt-4">
                    <div id="carouselExampleControls" className="carousel slide shadow bg-body rounded" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="img/imagen1.jpg" className="d-block w-100 img-fluid shadow-lg bg-body rounded" alt="imagen1" />
                            </div>
                            <div className="carousel-item">
                                <img src="img/imagen2.jpg" className="d-block w-100 img-fluid shadow-lg bg-body rounded" alt="imagen1." />
                            </div>
                            <div className="carousel-item">
                                <img src="img/imagen3.jpg" className="d-block w-100 img-fluid shadow-lg bg-body rounded" alt="imagen1" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>




            </div>


            <div className="row mt-5 d-flex justify-content-between align-items-center py-2">

                <div className="col-12 col-md-4 text-center text-md-start mb-4">
                    <h5 className="text-muted">Disfrutá tu tiempo

                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-alarm mx-2" viewBox="0 0 16 16">
                            <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                            <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                        </svg>
                    </h5>
                    <small className="text-muted">Compra online y retira en tienda</small>


                </div>


                <div className="col-12 col-md-4 text-center mb-4">
                    <h5 className="text-muted">Cuotas sin interés

                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-credit-card mx-2" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                        </svg>
                    </h5>
                    <small className="text-muted">Con la mejor financiación</small>
                </div>


                <div className="col-12 col-md-4 text-center text-md-end mb-4">
                    <h5 className="text-muted">Ofertas exclusivas

                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-tags mx-2" viewBox="0 0 16 16">
                            <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" />
                            <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" />
                        </svg>
                    </h5>
                    <small className="text-muted">En nuestra tienda online</small>
                </div>
            </div>




        </div>
    );
}

export default Home;