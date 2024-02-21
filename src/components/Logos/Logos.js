import "./Logos.css";

import { Container, Col, Row, CardDeck } from "react-bootstrap";
import Subheader from "../Subheader/Subheader";
import Title from "../Title/Title";
import Logo from "../Logo/Logo";
import texts from "../../text/global.json";

function Logos({ page, section }) {
  const logos = texts.homepage.alianza.images;
  return (
    <>
      <Container fluid className="bg-gray">
        <Container className="py-5">
          <Row className="justify-content-md-center">
            <Col className="mb-5">
              <Subheader page={page} section={section}></Subheader>
              <Title page={page} section={section}></Title>
            </Col>
          </Row>
          <Row className="">
            {logos.map((logo) => {
              return <Logo url={logo.url}></Logo>;
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Logos;
