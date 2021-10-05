import React from 'react';

const About = () => {
    return (
        
      <div className="container mt-4">


      <div className="row py-6 align-items-center justify-content-between mb-4">

        <div className="col-12 col-md-6 text-start">
        
          <p className="lead mb3"><span className="fs-2 lead text-success"> Vida Sana</span></p>

          <h5 className="mb-3">SOMOS LO QUE COMEMOS</h5>
          <p className="lead">Somos cada vez más los que buscamos una conexión real con nuestros alimentos. Lo que comés no solo afecta tu aspecto físico sino tu estado de ánimo, tu nivel de energía y hasta tu equilibrio hormonal. Todos necesitamos el cuerpo y la energía de nuestro lado, una alimentación consciente es el primer paso. </p>


          <h5 className="mb-3">CUIDAR EL PLANETA ES CUIDAR LA VIDA</h5>
          <p className="lead"> Cuidar de la naturaleza es cuidar de nuestra casa, y de la única fuente de vida con la que contamos. Creemos que una vida en armonía con el planeta no sólo es posible, también es urgente, y algo que nos debemos todos.</p>

          <h5 className="mb-3">CREEMOS EN HACER LAS COSAS BIEN</h5>
          <p className="lead">Creemos en el valor de hacer las cosas bien, y eso significa ser responsables con el contexto en todos sus aspectos. </p>
        </div>

        <div className="col-12 col-md-6 mb p-2">

          <img src="img/nosotros.jpg" alt="nosotros" className="img-fluid" />

        </div>


      </div>

    </div>
      );
}
 
export default About;