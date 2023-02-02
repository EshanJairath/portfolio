import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiDatabricks,
  SiMicrosoftazure,
  SiAnaconda,
  SiJupyter,
  SiPowerbi,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiKeras,
  SiMysql,
  SiGit
} from "react-icons/si";

import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
    <DiPython />
     </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAnaconda/>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiJupyter/>
    </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDatabricks/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPowerbi/>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql/>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Techstack;
