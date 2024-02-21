import "./TwoColumnInverted.css";

import { Container, Col, Row } from "react-bootstrap";
import texts from "../../text/global.json";

function TwoColumnInverted({ page, section }) {
  const body = texts[page][section].body;
  const title = texts[page][section].title;
  const url = texts[page][section].url;

  return (
    <>
      <Container className="py-md-5 pb-5">
        <Row>
          <Col md={6}>
            <h1 className="mb-3">{title}</h1>
            <p className="mt-4">{body}</p>
          </Col>
          <Col className="logo-img" md={6}>
            <img className="sticky-top" src={url} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TwoColumnInverted;
