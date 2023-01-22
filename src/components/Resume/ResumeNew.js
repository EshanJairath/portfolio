import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/EshanCV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


// const resumeLink =
//   "https://cors-anywhere.herokuapp.com/drive.google.com/file/d/15KDtjybyt1_JZtdpxTPbqzP-6BZiyRQ7/view?usp=share_link";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
    <Particle />
      <Container fluid className="resume-section">
      <div className="container">
      <Row>
      <hr/>
      <h2>Roles in which I am <span className="purple"> Currently Seeking Opportunities 🕵️ </span>-</h2> 
      <hr/>
      <ul className="purple">
        
        <li className="list_item_roles" > <span style={{color: 'white'}}> Machine Learning Engineer </span></li> 
        <li className="list_item_roles" > <span style={{color: 'white'}}>  Data Scientist </span></li>  
        <li className="list_item_roles" > <span style={{color: 'white'}}> Data Engineer </span></li>  
        <li className="list_item_roles" > <span style={{color: 'white'}}> Data Analyst </span></li> 
        <li className="list_item_roles" > <span style={{color: 'white'}}> Software Engineer </span></li> 
        <li className="list_item_roles" > <span style={{color: 'white'}}> Web Developer </span></li>  
        <li className="list_item_roles" > <span style={{color: 'white'}}> MERN Stack Developer </span></li>  

      </ul>
    
      </Row>
      <hr/>
      </div>
      <h1 className="text-center mt-5 pt-3"> Have a look at My <strong className="purple"> CV. </strong> 👀</h1>
        <Row className="resume ">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.51} height="1000" />
          </Document>
        </Row>

     
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
