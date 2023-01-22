import React from 'react'
import { Container } from 'react-bootstrap'
import Particle from '../Particle'
import BlogCards from './BlogCards'
import diff_pri from '../../Assets/Blogs/diff_pri.png'



function BlogHome() {
  
  return (
    <Container fluid className='blog_page'>
    
    <Container>
    <h1 style = {{color: 'white'}}> My <span className='purple'> Blogs 📋 </span> </h1>

    <p style={{ color: "white", fontSize:'1.4em' }}>
          I post my blogs Here 👇
    </p>
    <BlogCards
    imgPath = {diff_pri}
    title = 'Differential Privacy'
    date = '19 January 2023.'
    description = 'Differential privacy is a rapidly growing field in data science that aims to protect the privacy of individuals whose data is being collected and analyzed. In this article, I will explore the concept of differential privacy and its importance in data science.'
    link = '/blogs/differential_privacy'
    />

   
    </Container>
    <Particle/>
    </Container>
  )
}

export default BlogHome
