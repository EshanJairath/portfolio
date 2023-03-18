import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/gif3.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Eshan Jairath </strong>
              </h1>

              <div  className='home-typer' style={{ }}>
                <Type />
              </div>
              
              
            </Col>

            <Col md={5} className="d-flex align-items-center home_img_col" style={{ paddingBottom: 20}}>
                  <img
                    src={homeLogo}
                    alt="home pic"
                    className="home_img d-block mx-auto"
                  />
                </Col>

          
          
          
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
