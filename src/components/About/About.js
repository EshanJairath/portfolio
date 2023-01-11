import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import ai_900 from "../../Assets/Certifications/AI-900.png"
import Toolstack from "./Toolstack";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Certifications from "./Certifications";


function About(props) {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <hr/> 
        <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
          
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            <hr/>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "16%", paddingBottom: "30px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <hr/>
        <div className='mt-5 pt-5'>
        <h2 className='text-uppercase'> My <strong className="purple"> Education </strong></h2>
        <ListGroup className='mt-3 about_list_group'  as="ol">
        <ListGroup.Item
          as="li"
          className="justify-content-between align-items-start "
        >
          <div className="container">
          <Row>
          <Col md='10'>
          <p Style="font-size:1.8em" className="fw-bold list_grp_title ">Master's |  Post-Graduation 🧑‍🎓</p>
          <a Style="font-size:1.3em" className="about_links" href="https://www.northumbria.ac.uk/study-at-northumbria/courses/msc-artificial-intelligence-dtfari6/">
          MSc. Artificial Intelligence, Northumbria University, Newcastle, United Kingdom. 🇬🇧
          </a>
          <p Style="font-size:1.2em" className="dark_color">2021- 2022</p>
          </Col>
          <Col md ='2'>
          <Badge bg="#920be086" className='text-align-center score_badge main_color' pill>
            <p Style="font-size:1.3em" className='m-1 ml-auto' > Overall Grade - 2 : 1</p>
          </Badge>
          </Col>
          </Row>

           
            
          
          
          
          </div>
        </ListGroup.Item>

        <ListGroup.Item

          as="li"
          className="justify-content-between align-items-start"
        >
        <div className="container">

        <Row>
        <Col md='10'>
        <p Style="font-size:1.8em" className="fw-bold list_grp_title">Bachelors's |  Under-Graduation 🎓</p>
        <a Style="font-size:1.3em" href = 'https://www.srmist.edu.in/' className="about_links">
        B. Tech. Computer Science Engineering, SRM University, Delhi NCR, India. 🇮🇳
        </a>
        <p Style= "font-size:1.2em" className="dark_color" >2016 - 2020</p>
        </Col>
        <Col md ='2'>
        <Badge bg="#920be086" className='text-align-center score_badge main_color' pill>
          <p Style="font-size:1.3em" className='m-1 ml-auto' > Overall Grade - 2 : 1</p>
        </Badge>
        </Col>
        </Row>

        
      </div>
        </ListGroup.Item>
       
      </ListGroup>
        
      </div>

    
    <div className= 'mt-5 pt-5'>
    <h2>WORK AND RESEARCH <strong className="purple">EXPERIENCE</strong> </h2>
    <ListGroup className='mt-3 about_list_group' as="ol">
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className=" me-auto">
        <p Style="font-size:2em" className="fw-bold m-0 list_grp_title">Academic Research 📚
        </p>
        <p Style="font-size:1.8em" className="m-0 list_grp_org"> Northumbria University, Newcastle 🇬🇧 </p>
        <p Style="font-size:1.2em" className="dark_color">July 2022- Sept 2022</p>
        <ul className='m-3'>
        <li className="about_list_item" Style="font-size:1.3em">Conducted academic research on flood extent prediction using geospatial data extracted from the google earth engine and build a machine-learning regression model which acquired an NSE (Nash–Sutcliffe model efficiency coefficient) of <span style={{ color: "green" }}>0.83</span>  and RMSE of <span style={{ color: "green" }}> 0.27</span>.
        </li>
        <br/>
        <li className="about_list_item" Style="font-size:1.3em">The main objective of this model was to predict floodwater  percentages in the test region which can further allow disaster management to start evacuation of the regions with the highest flood percentage.</li>
        <br/>
        <li className="about_list_item" Style="font-size:1.3em"> Marks Obtained : <span style={{ color: "green" }}>72</span>/100 <span className="dark_color">(Distinction)</span>🏅
        </li>
        </ul>
        
      </div>
      
    </ListGroup.Item>

    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className=" me-auto">
        <p Style="font-size:2em" className="fw-bold m-0 list_grp_title">Junior AI Engineer 🤖
        </p>
        <p Style="font-size:1.6em" className="m-0 list_grp_org"> Print it Out, New Delhi, India 🇮🇳 </p>
        <p Style="font-size:1.2em" className="dark_color"> May 2021 – Aug 2021</p>
        <ul className='m-3'>
        <li className="about_list_item" Style="font-size:1.3em">Gathering the necessary facial data, pre-processing it, training, testing, and evaluating the models in real-world 
        scenarios by detecting the faces of the team members in real time
        </li>
        <br/>
        <li className="about_list_item" Style="font-size:1.3em">Boosted the Accuracy of the face detection algorithm to <span style={{ color: "green" }}> 91%</span> 🤩  on the testing data by choosing the right configuration of the necessary computer vision models, certain image pre-processing techniques and hyper-parameter tuning 🛠️ .</li>
        </ul>

        
      </div>
      
    </ListGroup.Item>

    <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className=" me-auto">
      <p Style="font-size:2em" className="fw-bold m-0 list_grp_title">Software Engineer 🧑‍💻
      </p>
      <p Style="font-size:1.6em" className="m-0 list_grp_org">Pixxmo, New Delhi, India 🇮🇳 </p>
      <p Style="font-size:1.2em" className="dark_color"> Nov 2020 – May 2021</p>
      <ul className='m-3'>
      <li className="about_list_item" Style="font-size:1.3em">Developed system analysis reports and system designs in accordance with the requirements of the projects after closely collaborating with clients and various teams
      </li>
      <br/>
      <li className="about_list_item" Style="font-size:1.3em">Reduced the workload of the entire team by <span style={{ color: "orange" }}>50%</span> 📉 by employing Third-party cloud APIs in the systems and building software/Applications according to the finalized system designs and reports.</li>
      </ul>
    </div>
    
  </ListGroup.Item>
   
  </ListGroup>
    </div>    
        <Certifications/>
      </Container>
    </Container>
    
  );
}

export default About;

// <h1 className="project-heading">
//           Professional <strong className="purple">Skillset </strong>
//         </h1>

//         <Techstack />

//         <h1 className="project-heading">
//           <strong className="purple">Tools</strong> I use
//         </h1>
//         <Toolstack />

//         <Github />