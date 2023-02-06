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
    <Col xs={4} md={2} className="tech-icons" title="Python">
    <DiPython />
     </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Anaconda">
      <SiAnaconda/>
    </Col>
    <Col xs={4} md={2} className="tech-icons" title="Jupyter Notebooks">
      <SiJupyter/>
    </Col>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft Azure">
        <SiMicrosoftazure/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Azure DataBricks">
        <SiDatabricks/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Power Bi">
      <SiPowerbi/>
    </Col>
    <Col xs={4} md={2} className="tech-icons" title="Scikitlearn">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Tensorflow">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Keras" >
        <SiKeras />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Numpy" >
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Pandas">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React.js">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Mongodb">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="My sql">
        <SiMysql/>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Pytorch">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git and GitHub">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Heroku">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Techstack;
