import "./Logo.css";

import { Container, Col, Row } from "react-bootstrap";
import texts from "../../text/global.json";

function Logo({ url }) {
  return (
    <>
      <Col>
        <img src={url} />
      </Col>
    </>
  );
}

export default Logo;
