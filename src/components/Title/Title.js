import "./Title.css";

import { Container, Col, Row } from "react-bootstrap";
import texts from "../../text/global.json";

function Title({ section, page, pubFound }) {
  return (
    <>
      {pubFound ? (
        <h1>{pubFound.title}</h1>
      ) : (
        <h1>{texts[page][section].title}</h1>
      )}
    </>
  );
}

export default Title;
