import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  
  SiSlack,
 
  SiMacos,
  SiApachenetbeanside,
  SiWindows11,
  
  SiMysql,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachenetbeanside />
      </Col>
    </Row>
  );
}

export default Toolstack;
