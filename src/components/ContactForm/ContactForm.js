import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import "./ContactForm.css";

import { Container, Col, Row, Form, Button, FormLabel } from "react-bootstrap";
import Subheader from "../Subheader/Subheader";
import Title from "../Title/Title";
import Alert from "../Alert/Alert";
import texts from "../../text/global.json";

function ContactForm({ page, section }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Escribe tu nombre."),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Escribe tu apellido."),
      email: Yup.string()
        .email("Tu dirección de correo no es valida")
        .required("Escribe tu correo electrónico"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Container fluid className="bg-red">
        <Container className="py-5 text-white">
          <Row>
            <Col className="contact-subheader" md={6}>
              <Subheader page={page} section={section}></Subheader>
              <Title page={page} section={section}></Title>
            </Col>

            <Col md={6}>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label htmlFor="firstName">
                    {texts[page][section].form.nombre}
                  </Form.Label>
                  <Form.Control
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="invalid-message">
                      <Alert />
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label htmlFor="email">
                    {texts[page][section].form.correo}
                  </Form.Label>
                  <Form.Control
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="invalid-message">
                      {" "}
                      <Alert />
                      {formik.errors.email}
                    </div>
                  ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTextarea">
                  <Form.Label htmlFor="lastName">
                    {texts[page][section].form.mensaje}
                  </Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={5}
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="invalid-message">
                      <Alert />
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </Form.Group>

                <Button className="px-4 py-3" variant="light" type="submit">
                  {texts[page][section].form.submit}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default ContactForm;
