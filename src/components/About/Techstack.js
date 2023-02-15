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
    <Col xs={3} md={2} className="tech-icons">
    <DiPython data-tip data-for="python"/>
  </Col>
  <Tooltip id="python" place="bottom" type="light" effect="solid">
    Python 
  </Tooltip>
</div>

<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<DiJavascript1 data-tip data-for="javascript"/>
</Col>
<Tooltip id="javascript" place="bottom" type="light" effect="solid">
  Javascript 
</Tooltip>
</div>

<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<SiAnaconda data-tip data-for="anaconda"/>
</Col>
<Tooltip id="anaconda" place="bottom" type="light" effect="solid">
  anaconda
</Tooltip>
</div>


<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<SiJupyter data-tip data-for="jupyter"/>
</Col>
<Tooltip id="jupyter" place="bottom" type="light" effect="solid">
  jupyter
</Tooltip>
</div>


<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<SiMicrosoftazure data-tip data-for="Azure"/>
</Col>
<Tooltip id="Azure" place="bottom" type="light" effect="solid">
  Azure
</Tooltip>
</div>


<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<SiDatabricks data-tip data-for="databricks"/>
</Col>
<Tooltip id="databricks" place="bottom" type="light" effect="solid">
  databricks
</Tooltip>
</div>
      

<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<SiPowerbi data-tip data-for="PowerBi"/>
</Col>
<Tooltip id="PowerBi" place="bottom" type="light" effect="solid">
  PowerBi
</Tooltip>
</div>
      

<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<SiScikitlearn data-tip data-for="Scikitlearn"/>
</Col>
<Tooltip id="Scikitlearn" place="bottom" type="light" effect="solid">
  Sci-kit learn
</Tooltip>
</div>
     
<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<SiTensorflow data-tip data-for="Tensorflow"/>
</Col>
<Tooltip id="Tensorflow" place="bottom" type="light" effect="solid">
Tensorflow
</Tooltip>
</div>

<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<SiPytorch  data-tip data-for="Pytorch"/>
</Col>
<Tooltip id="Pytorch" place="bottom" type="light" effect="solid">
Pytorch
</Tooltip>
</div> 

<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<SiKeras data-tip data-for="Keras"/>
</Col>
<Tooltip id="Keras" place="bottom" type="light" effect="solid">
Keras
</Tooltip>
</div>

<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<SiNumpy data-tip data-for="Numpy"/>
</Col>
<Tooltip id="Numpy" place="bottom" type="light" effect="solid">
Numpy
</Tooltip>
</div>  
     
<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<SiPandas data-tip data-for="Pandas"/>
</Col>
<Tooltip id="Pandas" place="bottom" type="light" effect="solid">
Pandas
</Tooltip>
</div>  
     
<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<DiReact data-tip data-for="React.js"/>
</Col>
<Tooltip id="React.js" place="bottom" type="light" effect="solid">
React.js
</Tooltip>
</div>  
     

<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<DiMongodb  data-tip data-for="MongoDB"/>
</Col>
<Tooltip id="MongoDB" place="bottom" type="light" effect="solid">
MongoDB
</Tooltip>
</div> 

<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<SiMysql  data-tip data-for="MySql"/>
</Col>
<Tooltip id="MySql" place="bottom" type="light" effect="solid">
MySql
</Tooltip>
</div> 

<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<SiFirebase  data-tip data-for="Firebase"/>
</Col>
<Tooltip id="Firebase" place="bottom" type="light" effect="solid">
Firebase
</Tooltip>
</div> 



<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<SiVisualstudiocode  data-tip data-for="VisualStudioCode"/>
</Col>
<Tooltip id="VisualStudioCode" place="bottom" type="light" effect="solid">
Visual Studio Code
</Tooltip>
</div> 

<div style={{display: "inline-block", width: "auto"}}>
<Col xs={3} md={2} className="tech-icons">
<SiGit  data-tip data-for="Git"/>
</Col>
<Tooltip id="Git" place="bottom" type="light" effect="solid">
Git and GitHub
</Tooltip>
</div>   
</Row>
  );
}

export default Techstack;
