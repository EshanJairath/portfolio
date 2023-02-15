import React from "react";
import { Container, Row, Col} from "react-bootstrap";
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
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import ReactTooltip from "react-tooltip";

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

                <li className="mt-2">Experienced in utilizing <span className="purple"> machine learning </span> and <span className="purple"> deep learning</span>  frameworks such as <span style={{color:'cyan'}}>Scikit-learn, TensorFlow, Pandas, </span> and <span style={{color:'cyan'}}> computer vision </span>, as well as expertise in <span style={{color:'cyan'}}> neural networks, NLP, reinforcement learning,</span> and <span style={{color:'cyan'}}>ELT pipelines.</span>  </li>

                <li className="mt-2">
                  Extensive knowledge of <span className="purple"> Artificial Intelligence </span> 
                  and <span className="purple">digital technologies </span>
                  
                </li>

                <li className="mt-2">
               Skilled in database management using <span className="purple"> MongoDB, SQL,</span> and <span className="purple">Firebase</span> . 
                </li>

                <li className="mt-2">
                Experienced in <span className="purple">data engineering</span>.
                </li>

                <li className="mt-2">
                Knowledge of <span className="purple">geospatial data</span> analysis and extraction.
                </li> 
                

                <li className="mt-2">
                Skilled in <span className="purple">predictive modeling</span> .
                </li>

                <li className="mt-2">
                Adept in <span className="purple">Exploratory Data Analysis </span>  (EDA).  </li>

                <li className="mt-2">
                Proficient in data visualization using <span className="purple">Microsoft Power BI</span> .
                </li>

                <li className="mt-2">
                <span style={{color:'cyan'}}> Microsoft Azure Certified</span>  with <span className="purple">cloud computing expertise</span>
                </li>

                <li className="mt-2">
                Familiar with version control systems such as <span className="purple">Git </span> and <span className="purple"> GitHub.</span>
                
                
               </li>
               
               <li className="mt-2">
               Knowledge of <span className="purple">MLOPS practices</span>.
               </li>

               <li className="mt-2">
               Experience with <span className="purple">Data Bricks</span>.
               </li>

               <li className="mt-2">
               Adept in technical documentation using <span className="purple"> LaTeX</span>.
               </li>
              
               <li className="mt-2">Experienced in <span className="purple">system analysis and design</span>.
              </li>

               <li className="mt-2">
               Skilled in web development using <span className="purple"> React.js </span> <span style={{color:'cyan'}}> (Redux and context API) </span>, <span className="purple">Node, Express.js,</span>  and <span className="purple">REST API</span>.
               
               </li>

               <li className="mt-2">
              Strong <span className="purple"> problem-solving skills</span>.
               </li>

               <li className="mt-2">
              Capable of effectively communicating <span className="purple"> complex technical concepts </span>  and their applications to <span className="purple"> non-technical audiences </span>.
            
             
               </li>

              </ul>
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
          <div style={{display: "inline-block", width: "auto"}}>
          <Tilt>
            <img src={myImg} id="me" className="img-fluid home_my_img" alt="avatar" data-tip data-for="me" />
          
          </Tilt>
          <ReactTooltip id="me" place="bottom" type="light"   effect="solid">
          👆 This is Me. 😎
          </ReactTooltip>
          </div>
            
         

            <div className="mt-4 tech-stack-home">
              <Techstack/>
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
