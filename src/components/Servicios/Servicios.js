import "./Servicios.css";

import { Container, Col, Row } from "react-bootstrap";
import Title from "../Title/Title";
import texts from "../../text/global.json";

function Servicios({ page, section, dirFound }) {
  const cards = texts[page][section].cards;

  return (
    <>
      <Container fluid className="bg-gray">
        <Container className="py-5">
          <h1 className="mb-3">{dirFound.title}</h1>
          <p className="mb-5">{dirFound.body}</p>
          <h1 className="mb-3">{dirFound.title2}</h1>
          <p>{dirFound.body2}</p>
        </Container>
      </Container>
    </>
  );
}

export default Servicios;
