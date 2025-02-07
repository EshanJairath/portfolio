import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


function BlogCards(props) {
  
  return (

     <Card className='blog_card mt-2' style={{ width: '100%'}}>
     <Card.Body>
     <Row> 
     <Col md = {8} >
      <Card.Title className='blog_car_title purple'>{props.title}</Card.Title>
      <Card.Subtitle style = {{color: 'cyan'}} className=" mb-3">{props.date}</Card.Subtitle>
       <Card.Text className='blog_card_desc' style={{ textAlign: "justify" }}>
       {props.description}
     </Card.Text>
     <ToastContainer />
     <a href={props.link} target="_blank" rel="noopener noreferrer">
              <Button className="mt-2" variant="primary">
                View Full Blog here
              </Button>
            </a>
       </Col>
       <Col md ={4}>
       <Card.Img variant='top' className='mt-3 blogPost_img mx-auto d-block' src = {props.imgPath} alt = 'blog_img'></Card.Img>
       
       </Col>
       </Row>
      
     </Card.Body>
   </Card>
  )
}

export default BlogCards
