import "./Subheader.css";

import { Col } from "react-bootstrap";
import texts from "../../text/global.json";

function Subheader({ section, page, pubFound }) {
  const subheader = texts[page][section].subheader;

  return (
    <>
      <Col className="d-flex">
        {pubFound ? (
          <h6 className="subheader-text">{pubFound.subheader}</h6>
        ) : (
          <h6 className="subheader-text">{subheader}</h6>
        )}
        {subheader ? <div className="subheader-line"></div> : ""}
      </Col>
    </>
  );
}

export default Subheader;
