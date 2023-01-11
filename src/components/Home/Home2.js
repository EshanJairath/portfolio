import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myImg.jpg";
import ai_900 from "../../Assets/Certifications/AI-900.png"
import Tilt from "react-parallax-tilt";
import Certifications from "../About/Certifications";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Ambitious, and talented engineer with exceptional computer science skills 🧑‍💻  and a master's degree 🎓  in Artificial Intelligence 🤖. Worked for small start-ups in Artificial Intelligence, Machine Learning, Data science, and software engineering departments. Gained experience 📈 in managing teams and building software applications from scratch 🛠️ by working on a variety of small and large-scale projects 🗃️. 
            
              <br />
              <br />
              <h style ={{fontSize :'1.6em'}} > My top <span className="purple">Skills</span></h>
              <br/>
              <ul className="mt-3">
                <li>
                Programming - <span className="purple">  Python, JavaScript.</span> 
                </li>
                
                <li>
                Data Structures and Algorithms
                </li>
                <li>Artificial Intelligence and Digital Technologies</li>
                <li>
                Machine learning & deep learning – <span className="purple"> Scikit-learn, 
                TensorFlow, Pandas, computer vision, Neural 
                Networks, NLP, Reinforcement learning, ELT 
                pipelines.</span>
                </li>
                <li>
                Database - <span className="purple"> MongoDB, SQL, Firebase.</span> 
                </li>

                <li>
                Cloud - <span className="purple"> Microsoft Azure</span> <span className="supporting_text">(Certified).</span> 
                </li>

                <li>
                Version Control – <span className="purple"> Git and GitHub</span> 
                </li>

                <li>
                Data Visualization – <span className="purple"> Microsoft Power BI.</span> 
                </li>

                <li>
                System Analysis and Design
                </li>

                <li>
                Web - <span className="purple">React.js (Redux and context API), Node, Express.js, REST API.</span> 
                </li>

                <li>
                Problem Solving.
                </li>

                

              </ul>
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid home_my_img" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/EshanJairath"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
    
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/eshan-jairath/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/eshan_jairath/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      
    </Container>
  );
}
export default Home2;
