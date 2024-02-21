import "./CardSection.css";

import { Container, Col, Row, CardDeck } from "react-bootstrap";
import Subheader from "../Subheader/Subheader";
import Card from "../Card/Card";
import Title from "../Title/Title";
import texts from "../../text/global.json";

function CardSection({ page, section, col, dirFound, pubFound, padding }) {
  const cards = texts[page][section].cards;

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
          <Row className="g-4">
            {cards.map((card) => {
              return (
                <Card
                  padding={padding}
                  col={col}
                  title={card.title}
                  body={card.body}
                  url={card.url}
                  link={card.link}
                  linktext={card.linktext}
                  dirFound={dirFound}
                  pubFound={pubFound}></Card>
              );
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default CardSection;
