import "./Hero.css";

import { Container, Row, Col, Button } from "react-bootstrap";
import texts from "../../text/global.json";

function Hero({ page }) {
  return (
    <>
      <Container
        fluid
        className="hero"
        style={{
          backgroundImage: `url("/assets/hero.png")`,
        }}>
        <Container className="hero-container">
          <Row>
            <Col md={6} className="hero-text text-left">
              <h1 className="hero-title">{texts.homepage.hero.title}</h1>
              <p>{texts.homepage.hero.title}</p>
              <Button className="px-4 py-3">Contáctanos</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Hero;
