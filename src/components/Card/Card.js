import "./Card.css";

import { Col, Button, CardFooter } from "react-bootstrap";
import texts from "../../text/global.json";

function Card({
  col,
  title,
  body,
  url,
  link,
  linktext,
  dirFound,
  pubFound,
  padding,
}) {
  return (
    <>
      <Col className={`col-md-${col} col-12`}>
        <Col className="bg-white p-4 card-b">
          {dirFound ? (
            <img className="card-c-img" src={url} />
          ) : (
            <img
              style={padding ? { marginLeft: "-10px" } : ""}
              className={`card-b-img ${padding}`}
              src={url}
            />
          )}
          <h5>{title}</h5>
          {body ? <p>{body}</p> : ""}
          {pubFound ? (
            <a href={`/publicaciones/${link}`}>
              <Button className="card-btn px-4 py-3">{linktext}</Button>
            </a>
          ) : dirFound ? (
            <a href={`/directorio/${link}`}>
              <Button className="card-btn px-4 py-3">{linktext}</Button>
            </a>
          ) : link ? (
            <a href={link}>
              <Button className="card-btn px-4 py-3">{linktext}</Button>
            </a>
          ) : (
            ""
          )}
        </Col>
      </Col>
    </>
  );
}

export default Card;
