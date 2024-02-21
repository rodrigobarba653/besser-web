import "./Extra.css";

import { Container, Col, Row } from "react-bootstrap";
import Subheader from "../Subheader/Subheader";
import Title from "../Title/Title";
import texts from "../../text/global.json";

function Extra({ page, section }) {
  return (
    <>
      <Container className="py-5">
        <Col>
          <Subheader page={page} section={section}></Subheader>
        </Col>
        <Row>
          <Col className="extra-title" md={6}>
            <Title page={page} section={section}></Title>
            <Col className="my-3">
              <img src={texts.homepage.extra.url} />
            </Col>
            <p>{texts.homepage.extra.body}</p>
          </Col>
          <Col className="extra-title" md={6}>
            <Title page={page} section={`${section}2`}></Title>
            <Col className="my-3">
              <img src={texts.homepage.extra2.url} />
            </Col>
            <p>{texts.homepage.nosotros.body}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Extra;
