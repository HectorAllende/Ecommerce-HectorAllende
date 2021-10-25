import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap'



const Formulario = () => {


  const [validated, setValidated] = useState(false);
  const { handleShowOrder, handleChangeCliente, crearOrden, handleShowTerminos } = useContext(CartContext)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();


    }

    if (form.checkValidity() === true) {
      handleShowOrder()
      crearOrden()
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }

  return (
    <>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-2">
          <Form.Group as={Col} md="6" controlId="validationCustom01" className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              name="nombre"
              placeholder="Tu mombre"
              onChange={handleChangeCliente}

            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom02" className="mb-2">
            <Form.Label>Apellido</Form.Label>

            <Form.Control
              required
              type="text"
              placeholder="Tu apellido"
              name="apellido"
              onChange={handleChangeCliente}

            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
  
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustomEmail" className="mb-2">

            <Form.Label>Mail</Form.Label>
            <InputGroup hasValidation>


              <Form.Control
                type="email"
                placeholder="Tu mail"
                aria-describedby="inputGroupPrepend"
                required
                name="email"
                onChange={handleChangeCliente}
              />

              <Form.Control.Feedback type="invalid">
                Ingrese un mail
              </Form.Control.Feedback>

            </InputGroup>

          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom06" className="mb-2">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
             type="tel"
             placeholder="Tu celular"
             required
             name="telefono"
             onChange={handleChangeCliente} 
            />
            <Form.Control.Feedback type="invalid">
              Ingrese un numero de contacto
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group as={Col} md="6" controlId="validationCustom03" className="mb-2">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tu ciudad"
              required
              name="ciudad"
              onChange={handleChangeCliente}
            />
            <Form.Control.Feedback type="invalid">
              Ingrese una ciudad
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom04" className="mb-2">
            <Form.Label>Provincia</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tu provincia"
              required
              name="provincia"
              onChange={handleChangeCliente}
            />
            <Form.Control.Feedback type="invalid">
              Ingrese una provincia
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="3" controlId="validationCustom05" className="mb-2">
            <Form.Label>Comentarios</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Ingrese comentarios o aclaración"
              style={{ height: '60px' }}
              name="comentarios"
              onChange={handleChangeCliente}

            />
          </Form.Group>

        </Row>

        <Form.Group className="mb-2 fs-sm">
          <Form.Check
            required           
            label="Acepto términos y condiciones"
            feedback="Debe aceptar terminos y condiciones."
            feedbackType="invalid"
          />
           <button className="ms-3 btn count--button text-muted btn-sm" onClick={()=>handleShowTerminos()}>Ver Términos</button>
        </Form.Group>

        <Button type="submit" className="btn btn-success shadow rounded-pill mt-4">Confirmar Compra</Button>

      </Form>

    </>

  );
}

export default Formulario