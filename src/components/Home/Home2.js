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
              <h style ={{fontSize :'1.6em' }} > My top <span className="purple">Skills</span></h>
              <br/>
              <ul className="mt-3">
                <li className="mt-2">
                Proficient in programming languages such as <span className="purple">  Python</span> and
                 <span className="purple">JavaScript.</span> 
                </li>
                
                <li className="mt-2">
                Strong understanding of <span className="purple"> data structures</span>  and <span className="purple"> algorithms.</span> 
                </li>

                <li className="mt-2">Experienced in utilizing <span className="purple"> machine learning </span> and <span className="purple"> deep learning</span>  frameworks such as Scikit-learn, TensorFlow, Pandas, and computer vision, as well as expertise in neural networks, NLP, reinforcement learning, and ELT pipelines.</li>

                <li className="mt-2">
                  Extensive knowledge of Artificial Intelligence and digital technologies
                </li>

                <li className="mt-2">
               Skilled in database management using MongoDB, SQL, and Firebase.
                </li>

                <li className="mt-2">
                Experienced in data engineering.
                </li>

                <li className="mt-2">
                Knowledge of geospatial data analysis and extraction.
                </li>

                <li className="mt-2">
                Skilled in predictive modeling.
                </li>

                <li className="mt-2">
                Adept in Exploratory Data Analysis (EDA).
                </li>

                <li className="mt-2">
                Proficient in data visualization using Microsoft Power BI.
                </li>

                <li className="mt-2">
                Microsoft Azure Certified with cloud computing expertise.
                </li>

                <li className="mt-2">
                Familiar with version control systems such as Git and GitHub.
               </li>
               
               <li className="mt-2">
               Knowledge of MLOPS practices.
               </li>

               <li className="mt-2">
               Experience with Data Bricks.
               </li>

               <li className="mt-2">
               Adept in technical documentation using LaTeX.
               </li>
              
               <li className="mt-2">Experienced in system analysis and design.
              </li>

               <li className="mt-2">
               Skilled in web development using React.js (Redux and context API), Node, Express.js, and REST API.
               </li>

               <li className="mt-2">
              Strong problem-solving skills.
               </li>

               <li className="mt-2">
              Capable of effectively communicating complex technical concepts and their applications to non-technical audiences.
               </li>

              </ul>
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid home_my_img" alt="avatar" />
            </Tilt>

            <div className="mt-5 tech-stack-home">
              <h2 className="purple"> My Tech Stack -</h2>

            </div>

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
