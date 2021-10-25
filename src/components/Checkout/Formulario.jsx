import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap'


const Formulario = () => {


  const [validated, setValidated] = useState(false);
  const { handleShowOrder } = useContext(CartContext)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();


    }

    if (form.checkValidity() === true) {
      handleShowOrder()
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }

  return (
    <>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-2">
          <Form.Group md="4" controlId="validationCustom01" className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Tu mombre"

            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="4" controlId="validationCustom02" className="mb-2">
            <Form.Label>Apellido</Form.Label>

            <Form.Control
              required
              type="text"
              placeholder="Tu apellido"

            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="4" controlId="validationCustomUsername" className="mb-2">

            <Form.Label>Mail</Form.Label>
            <InputGroup hasValidation>


              <Form.Control
                type="email"
                placeholder="Mail"
                aria-describedby="inputGroupPrepend"
                required
              />

              <Form.Control.Feedback type="invalid">
                Ingrese un mail por favor.
              </Form.Control.Feedback>

            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom03" className="mb-2">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type="text" placeholder="Ciudad" required />
            <Form.Control.Feedback type="invalid">
              Ingrese una ciudad.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04" className="mb-2">
            <Form.Label>Provincia</Form.Label>
            <Form.Control type="text" placeholder="Provincia" required />
            <Form.Control.Feedback type="invalid">
              Ingrese una provincia.
            </Form.Control.Feedback>
          </Form.Group>

          {/* <Form.Group  md="3" controlId="validationCustom05" className="mb-2">
            <Form.Label>CP</Form.Label>
            <Form.Control type="text" placeholder="Código postal" required />
            <Form.Control.Feedback type="invalid">
              Ingrese un codigo postal.
            </Form.Control.Feedback>
          </Form.Group> */}

        </Row>

        <Form.Group className="mb-1">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>


        <Button type="submit" className="btn btn-success shadow rounded-pill mt-3">Confirmar Compra</Button>

      </Form>

    </>

  );
}

export default Formulario