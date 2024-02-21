import "./PreNav.css";

import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function PreNav() {
  return (
    <>
      <div className="prenav-bg">
        <Container className="py-2">
          <Col className="d-flex justify-content-end">
            <Link className="me-4 small" to="/aviso-de-privacidad">
              Aviso de Privacidad
            </Link>
          </Col>
        </Container>
      </div>
    </>
  );
}

export default PreNav;
