import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import CoverImg from "../../Assets/MyImg_2.jpg";
import ai_900 from "../../Assets/Certifications/AI-900.png"
import Toolstack from "./Toolstack";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Tilt from "react-parallax-tilt";
import Certifications from "./Certifications";
import ReactTooltip from "react-tooltip";


function About(props) {
  return (
    <Container fluid className="about-section">
      <Particle />
      <div>
        <Row className="about_comp ">
        <hr/>
        
        <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
          
            <h1  className="text-center" style={{ fontSize: "2em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M 😀</strong>
            <hr/>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "10px" }}
            className="about-img"
          >
          <Tilt>
            <img src={CoverImg} alt="about" className="about_cover_img" data-tip data-for="me_2"/>
            </Tilt>
            <ReactTooltip id="me_2" place="bottom" type="light"   effect="solid">
            👆 This is also Me. 😎
            </ReactTooltip>
          </Col>
          <hr/>
        </Row>
        
    <div className= 'mt-5 pt-5 container'>
    <h1 className="text-center">WORK <strong className="purple">EXPERIENCE 💼</strong> </h1>
    <ListGroup className='mt-3 about_list_group' as="ol">
    <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className=" me-auto">
      <p Style="font-size:2em" className="fw-bold m-0 list_grp_title"> AI Engineer 💡
      </p>
      <p Style="font-size:1.8em" className="m-0 list_grp_org"> IMIS Global , Newcastle 🇬🇧 </p>
      <p Style="font-size:1.2em" className="dark_color">Feb 2023 - Present 🟢</p>
      <ul className='m-3'>
      <li className="about_list_item">
      Designing enhanced capabilities to smooth the movement of shipping 🚢 at local, regional and ultimately global levels. 
      </li>
      <br/>
      <li className="about_list_item"> Innovating the use of historical  and real-time ⌛ data in developing predictive and more reliable models. </li>
      <br/>
      <li className="about_list_item"> Developing AI 🤖 and data work outputs and system enhancements 🧑‍💻 according to the key aims of the Organization.
      </li>
      </ul>
      
    </div>
    
  </ListGroup.Item>


    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className=" me-auto">
        <p Style="font-size:2em" className="fw-bold m-0 list_grp_title">Academic Research 📖
        </p>
        <p Style="font-size:1.8em" className="m-0 list_grp_org"> Northumbria University, Newcastle 🇬🇧 </p>
        <p Style="font-size:1.2em" className="dark_color">July 2022- Sept 2022</p>
        <ul className='m-3'>
        <li className="about_list_item">Conducted academic research on flood extent prediction using geospatial data extracted from the google earth engine and build a machine-learning regression model which acquired an NSE (Nash–Sutcliffe model efficiency coefficient) of <span style={{ color: "green" }}>0.83</span>  and RMSE of <span style={{ color: "green" }}> 0.27</span>.
        </li>
        <br/>
        <li className="about_list_item">The main objective of this model was to predict floodwater  percentages in the test region which can further allow disaster management to start evacuation of the regions with the highest flood percentage.</li>
        <br/>
        <li className="about_list_item"> Marks Obtained : <span style={{ color: "green" }}>72</span>/100 <span className="dark_color">(Distinction)</span>🏅
        </li>
        </ul>
        
      </div>      
    </ListGroup.Item>

    <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className=" me-auto">
      <p Style="font-size:2em" className="fw-bold m-0 list_grp_title"> Data Science Intern 🚀
      </p>
      <p Style="font-size:1.8em" className="m-0 list_grp_org"> Capgemini , New Delhi 🇮🇳 </p>
      <p Style="font-size:1.2em" className="dark_color">Dec 2020 – May 2021</p>
      <ul className='m-3'>
      <li className="about_list_item">
      Developed and fine-tuned machine learning models, including regression, classification, and clustering algorithms, to solve real-world business challenges 👍 and optimize decision-making processes for potential clients. 
      </li>
      <br/>
      <li className="about_list_item">Designed and implemented data visualization 📈 dashboards using Power BI, effectively communicating complex findings to stakeholders and driving data-informed decision-making. </li>
      <br/>
      <li className="about_list_item">Assisted in the development of data pipelines ⚙️ and ETL (Extract, Transform, Load) processes, ensuring efficient data integration and maintenance.
      </li>
      </ul>
      
    </div>
    
  </ListGroup.Item>
    
   
  </ListGroup>
    </div> 

    <div className='mt-5 pt-5 container'>
    <h1  className="text-center"> MY <strong className="purple"> EDUCATION 📚 </strong></h1>
    <ListGroup className='mt-3 about_list_group'  as="ol">
    <ListGroup.Item
      as="li"
      className=" align-items-start "
    >
      <div className="container">
      <Row>
      <Col md={9}>
      <p Style="font-size:1.8em" className="fw-bold list_grp_title ">Master's |  Post-Graduation 🧑‍🎓</p>
      <a Style="font-size:1.3em" className="about_links" href="https://www.northumbria.ac.uk/study-at-northumbria/courses/msc-artificial-intelligence-dtfari6/">
      MSc. Artificial Intelligence, Northumbria University, Newcastle, United Kingdom. 🇬🇧
      </a>
      <p Style="font-size:1.2em" className="dark_color">2021- 2022</p>
      </Col>
      <Col md ={3} className="badge_about_col">
      <Badge bg="#920be086" className='text-align-center score_badge main_color' pill>
        <p Style="font-size:1.4em" className='m-1' > Grade - <span  style={{ color: "cyan" }}> Commendation 🏅</span> </p>
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
    <Col md={9}>
    <p Style="font-size:1.8em" className="fw-bold list_grp_title">Bachelors's |  Under-Graduation 🎓</p>
    <a Style="font-size:1.3em" href = 'https://www.srmist.edu.in/' className="about_links">
    B. Tech. Computer Science Engineering, SRM University, Delhi NCR, India. 🇮🇳
    </a>
    <p Style= "font-size:1.2em" className="dark_color" >2016 - 2020</p>
    </Col>
    <Col md ={3} className="badge_about_col">
    <Badge bg="#920be086" className='text-align-center score_badge main_color' pill>
      <p Style="font-size:1.4em" className='m-1' >Final Grade -  <span  style={{ color: "cyan" }}> First Class 🏅</span></p>
    </Badge>
    </Col>
    </Row>

    
  </div>
    </ListGroup.Item>
   
  </ListGroup>
    
  </div>

    <div className=" container">
    <Certifications/>
    </div>   
  
    </div>
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