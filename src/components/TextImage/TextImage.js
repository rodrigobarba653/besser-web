import Title from "../Title/Title";
import "./TextImage.css";

import texts from "../../text/global.json";

import { Container, Col, Row, Button } from "react-bootstrap";

function TextImage({ page, section, id, dirFound }) {
  const url = texts[page][section].url;
  const cta = texts[page][section].button;
  const link = texts[page][section].link;

  // get pubid of texts json
  const pubIDArr = texts.publicaciones.pubid;
  const pubFound = pubIDArr.find((item) => item.id === id);

  return (
    <>
      <Container fluid className="bg-red text-image-fullbg">
        <Container>
          <Row>
            <Col className="text-image-1 bg-red" md={6}>
              <Title page={page} section={section} />
              {pubFound ? (
                <h6 className="textimage-subheader">{pubFound.title}</h6>
              ) : (
                ""
              )}
              {dirFound ? (
                <h6 className="textimage-subheader">{dirFound.name}</h6>
              ) : (
                ""
              )}
              {cta ? (
                <Col>
                  <a target="_blank" href={link}>
                    <Button className="px-4 py-3" variant="light">
                      {cta}
                    </Button>
                  </a>
                </Col>
              ) : (
                ""
              )}
            </Col>
          </Row>
        </Container>
        <Col
          className="text-image-bg"
          md={6}
          style={{
            backgroundImage: `url(${url})`,
          }}
        ></Col>
      </Container>
    </>
  );
}

export default TextImage;
