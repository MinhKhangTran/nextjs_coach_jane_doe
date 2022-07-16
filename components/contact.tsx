import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <section id="kontakt" className="wrapper" aria-label="kontakt abschnitt">
      <Row>
        <Col lg={5} md={4}>
          <h2 className="heading-2 text-warning">Jetzt Kontakt aufnehmen</h2>
          <p className="pt-md-3 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit
          </p>
        </Col>
        <Col lg={7} md={8}>
          <Form
            className="form__wrapper"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group controlId="exampleInputName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control required type="text" placeholder="Name" />
              <Form.Control.Feedback type="invalid">
                Bitte einen Namen eingeben
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleInputEmail" className="mb-3">
              <Form.Label className="form-label">E-mail Adresse</Form.Label>
              <Form.Control required type="email" placeholder="E-Mail" />
              <Form.Control.Feedback type="invalid">
                Bitte eine E-Mail Adresse eingeben
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleInputNachricht" className="mb-3">
              <Form.Label className="form-label">Nachricht</Form.Label>
              <Form.Control required as="textarea" rows={3} />
              <Form.Control.Feedback type="invalid">
                Bitte eine Nachricht eingeben
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Nachricht senden
            </Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
