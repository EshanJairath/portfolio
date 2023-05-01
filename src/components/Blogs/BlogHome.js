import React from 'react'
import { Container } from 'react-bootstrap'
import Particle from '../Particle'
import BlogCards from './BlogCards'
import diff_pri from '../../Assets/Blogs/diff_pri.png'
import data_drift from '../../Assets/Blogs/data_drift.png'
import strat from '../../Assets/Blogs/stratified.jpg'
import flask from '../../Assets/Blogs/Flask.jpeg'


function BlogHome() {
  
  return (
    <Container fluid className='blog_page'>
    
    <div className='blog_home_page'>
    <h1 className='text-center' style = {{color: 'white'}}> My <span className='purple'> Blogs 📝 </span> </h1>

    <p className='text-center' style={{ color: "white", fontSize:'1.4em' }}>
          I post all my blogs Here 👇
    </p>

    <BlogCards
    imgPath = {flask}
    title = 'Importance of Flask in Data Science and Machine Learning'
    date = '25 March 2023.'
    description = 'Flask is a popular micro web framework for building web applications in Python. It is lightweight, easy to use, and allows for the creation of web applications with minimal setup and configuration. Flask is also becoming increasingly popular in machine learning engineering as it allows for the creation of web-based interfaces for machine learning models.'
    link = '/blogs/flask'
    
    />


    <BlogCards
    imgPath = {strat}
    title = 'Stratification of data to mitigate Bias'
    date = '17 February 2023.'
    description = 'Stratification of data is a technique used in data science to ensure that different groups within a dataset are represented fairly and proportionately. This is particularly important when working with datasets that have imbalanced class distributions, as this can lead to bias in the model predictions.'
    link = '/blogs/strat'
    />


    <BlogCards
    imgPath = {data_drift}
    title = 'Data Drift '
    date = '26 January 2023.'
    description = 'Data drift is a phenomenon that occurs when the distribution of the data that a machine learning model is trained on differs significantly from the distribution of the data it is subsequently applied to.This can lead to a decline in model performance, and is a common problem in data science.'
    link = '/blogs/data_drift'
    />
    
    <BlogCards
    imgPath = {diff_pri}
    title = 'Differential Privacy'
    date = '19 January 2023.'
    description = 'Differential privacy is a rapidly growing field in data science that aims to protect the privacy of individuals whose data is being collected and analyzed. In this article, I will explore the concept of differential privacy and its importance in data science.'
    link = '/blogs/differential_privacy'
    />
   
    

   
    </div>
    <Particle/>
    </Container>
  )
}

export default BlogHome
