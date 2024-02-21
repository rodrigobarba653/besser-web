import "./GeneralText.css";
import parse from "html-react-parser";

import { Container, Col, Row } from "react-bootstrap";
import Subheader from "../Subheader/Subheader";
import Title from "../Title/Title";
import texts from "../../text/global.json";

function GeneralText({ page, section }) {
  const url = texts[page][section].url;
  const body = parse(texts[page][section].body);

  return (
    <>
      <Container className="py-5">
        <Row className="py-5">
          <Col>
            <Subheader page={page} section={section}></Subheader>
            <Title page={page} section={section}></Title>
            <p>{body}</p>
            <Col>
              <img src={url} />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default GeneralText;
