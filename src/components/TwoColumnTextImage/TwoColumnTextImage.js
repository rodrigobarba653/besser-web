import React, { useEffect, useState, useRef } from "react";
import "./TwoColumnTextImage.css";

import { Container, Col, Row } from "react-bootstrap";
import texts from "../../text/global.json";

function TwoColumnTextImage({ page, section, dirFound }) {
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
      <Container className="py-md-5 pb-5">
        <Row
          ref={elementRef}
          className={height < 390 ? "twocolumns-padding" : ""}
        >
          <Col className="logo-img" md={6}>
            <img src={dirFound.url} />
          </Col>
          <Col md={6}>
            <h1 className="mb-3">{dirFound.maintitle}</h1>
            <a href={dirFound.emaillink}>{dirFound.email}</a>
            <p className="mt-4">{dirFound.mainbody}</p>
          </Col>
        </Row>
        {dirFound.mainbody2 ? (
          <Row>
            <p className="mt-4">{dirFound.mainbody2}</p>
          </Row>
        ) : (
          ""
        )}
      </Container>
    </>
  );
}

export default TwoColumnTextImage;
