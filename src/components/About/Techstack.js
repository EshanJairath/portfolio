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
  
}from "react-icons/di";
import Tooltip from 'react-tooltip';
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
    <div style={{display: "inline-block", width: "auto"}}>
    <Col xs={4} md={2} className="tech-icons">
    <DiPython data-tip data-for="python"/>
  </Col>
  <Tooltip id="python" place="bottom" type="light" effect="solid">
    Python 
  </Tooltip>
</div>

<div style={{display: "inline-block", width: "auto"}}>
<Col xs={4} md={2} className="tech-icons">
<DiJavascript1 data-tip data-for="javascript"/>
</Col>
<Tooltip id="javascript" place="bottom" type="light" effect="solid">
  Javascript 
</Tooltip>
</div>



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
