import "./Footer.css";
import { Link } from "react-router-dom";

import { Container, Col, Row } from "react-bootstrap";
import Subheader from "../Subheader/Subheader";
import Title from "../Title/Title";
import texts from "../../text/global.json";

function Footer() {
  const cols = texts.homepage.footer.cols;
  const redes = texts.homepage.footer.redes;
  return (
    <>
      <Container className="footer" fluid>
        <Container className="py-5">
          <Row>
            {cols.map((col) => {
              const id = col.id;
              return (
                <Col md={3} className="text-white">
                  <h4>{col.title}</h4>
                  {id === "col1" && (
                    <Row>
                      {redes.map((red) => {
                        return (
                          <Col className="redes-wrapper col-2">
                            <a href={red.link}>
                              <img src={red.url} />
                            </a>
                          </Col>
                        );
                      })}
                    </Row>
                  )}
                  <a href={col.link}>{col.linktext}</a>
                  <p>{col.body}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Footer;
