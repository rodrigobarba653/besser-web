import React, { useEffect, useState, useRef } from "react";
import "./TwoColumnText.css";

import { Container, Col, Row } from "react-bootstrap";
import Subheader from "../Subheader/Subheader";
import Title from "../Title/Title";
import texts from "../../text/global.json";

function TwoColumnText({ page, section, pubFound }) {
  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setHeight(elementRef.current.offsetHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Container className="py-5">
        <Row
          ref={elementRef}
          className={height < 390 ? "twocolumns-padding" : ""}>
          <Col md={6}>
            <Subheader page={page} section={section} pubFound={pubFound} />
            <Title page={page} section={section} pubFound={pubFound} />
          </Col>
          <Col md={6}>
            {pubFound ? (
              <p>{pubFound.body}</p>
            ) : (
              <p>{texts[page][section].body}</p>
            )}
          </Col>
        </Row>
        {pubFound ? (
          <Row>
            <img src={pubFound.url} />
          </Row>
        ) : (
          ""
        )}
      </Container>
    </>
  );
}

export default TwoColumnText;
