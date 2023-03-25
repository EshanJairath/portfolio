import copy from 'copy-to-clipboard';
import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row, ToastContainer } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { toast } from 'react-toastify';
import Particle from '../../Particle';
import flask from '../../../Assets/Blogs/Flask.jpeg'

function Flask() {
    var codeString = `from flask import Flask, request, jsonify
    from sklearn.externals import joblib
    
    # Load the model
    model = joblib.load("model.pkl")
    
    # Create the Flask app
    app = Flask(__name__)
    
    # Create a route for predictions
    @app.route("/predict", methods=["POST"])
    def predict():
        # Get the data from the request
        data = request.get_json()
        # Make a prediction using the model
        prediction = model.predict(data)
        # Return the prediction as a JSON
        return jsonify(prediction.tolist `
  
  
    
    function handleCopy_1() {
      toast('Code Copied To Clipboard !')
      copy(codeString);
    }
   
    return (
      <div className='BlogContainer'>
      <Container>
      <div className='container'>
      <Row>
      <Col md = {6} className='blog_col'>
      <h1>  <span className='purple'>Importance of Flask</span> in Machine Learning and Data science</h1>
      <p style={{color:'cyan'}}>Data Science  <span style={{color:'white'}} > | 25 March 2023 .</span></p>
  
      <p className='blog_post_paragraph' style={{color:'cyan'}}>Have you ever wondered how machine learning models can be made accessible to non-technical users through web-based interfaces? </p>

        <p className='blog_post_paragraph' >In this blog, I will explore the importance of Flask in machine learning engineering and data science, and how it can be used to create web-based interfaces for machine learning models. As a machine learning engineer, I often train models on large datasets and use them to make predictions on new data. Flask has been incredibly helpful in creating a web-based interface for this process, allowing users to upload data and receive predictions from the model in a user-friendly format. I've found this particularly useful in production environments where models need to be deployed and used by a non-technical audience.</p>

        <p className='blog_post_paragraph' style={{color:'cyan'}}>What is Flask ? </p>
  
      <p className='blog_post_paragraph'>
        Flask is a popular micro web framework for building web applications in Python. It is lightweight, easy to use, and allows for the creation of web applications with minimal setup and configuration. Flask is also becoming increasingly popular in machine learning engineering as it allows for the creation of web-based interfaces for machine learning models.
      </p>
  
      <p className='blog_post_paragraph'>
      In machine learning engineering, it's common to train a model on a large dataset and then use it to make predictions on new data. Flask can be used to create a web-based interface for this process, allowing users to upload data and receive predictions from the model in a user-friendly format. This can be particularly useful in production environments, where models need to be deployed and used by a non-technical audience.
      </p>
  
  
      <p className='blog_post_paragraph'>
      One of the main advantages of using Flask in machine learning engineering is that it allows for easy integration with other Python libraries and frameworks. For example, it can be used in conjunction with scikit-learn to create a web-based interface for a machine learning model trained using that library. It also allows for the integration of other popular Python libraries such as NumPy, Pandas, and Matplotlib
      </p>
  
      <p className='blog_post_paragraph'> Flask is also lightweight and easy to set up, making it a good choice for creating small-scale web applications. It is also highly customizable, allowing for the creation of a wide range of different interfaces and functionality. Additionally, it has a large and active community that provides support and resources for developers.
       </p>

       <p className='blog_post_paragraph' style={{color:'cyan'}}>Where I used Flask in combination of machine learning </p>
       <p className='blog_post_paragraph' >
       I made a project using Flask and machine learning to predict the likelihood of heart failure in patients. The project utilized a Random Forest Classification model trained on patient data, including demographic information and medical history, to provide accurate predictions with an accuracy rate of 94%. The project was designed as a web application, which allowed users to input their own information and receive a prediction of their risk of heart failure.

</p>

<p className='blog_post_paragraph' >

Flask played a vital role in making the heart failure prediction model accessible to users through a RESTful API. By creating a Flask app and defining a route to handle POST requests, I was able to build a lightweight web application that users could access from anywhere, using any device with an internet connection. Flask made it easy to provide predictions based on user input data and return the results in a simple and understandable JSON format.

If you're interested in learning more about this project, please check out the projects section of my portfolio.</p>
     
<p className='blog_post_paragraph' style={{color: 'cyan'}}>
  If you're interested in learning more about this project, please check out the&nbsp;
  <Link to='/project' style={{color: '#c770f0', textDecoration: 'none'}}>
    Projects
  </Link>
  &nbsp;section of my portfolio.
</p>
  
      </Col>
      
      <Col md={6} className='p-3'>
      <img src={flask} className='mx-auto d-flex blog_title_img' alt=""/>
      <div className='container mt-5'>
  
      
        <h1 className=''>Here is an 
        <span className='purple'> example </span> of how to create a simple web application in Python using flask and scikit-learn</h1>
        <p className='blog_post_paragraph' style={{color:'cyan'}}>
        
        </p>
        <SyntaxHighlighter className='code_example' language='python' style={atomOneDark}>
        {codeString}
        </SyntaxHighlighter>
        <ToastContainer />
        <Button onClick={handleCopy_1} variant='primary'> Copy to clipboard</Button>
  
        <p className='blog_post_paragraph'>
        This code snippet demonstrates how to create a RESTful API using Flask and scikit-learn to serve a pre-trained machine learning model. With just a few lines of code, we can create an endpoint that accepts a JSON request containing input data, applies the pre-trained model to the input, and returns a JSON response with the predicted output.
      </p>

      <p className='blog_post_paragraph'>
      The code first loads a pre-trained machine learning model from a file using the joblib library. It then creates a Flask app object and defines a route to handle POST requests for input data. The function associated with the route takes the input data from the request, applies the pre-trained model to it, and returns the predicted output as a JSON response.
      </p>

      <p className='blog_post_paragraph'>
      Using Flask and scikit-learn together, we can easily build and deploy machine learning models as RESTful APIs, which can be used for various applications such as recommendation systems, fraud detection, and sentiment analysis, among others.
      </p>
  
      <p className='blog_post_paragraph' style={{color:'cyan'}}>Conclusion</p>
      <p className='blog_post_paragraph'>
      In conclusion, Flask is a powerful web framework that can greatly enhance the accessibility and usability of machine learning models. With its ease of use, customization options, and integration with popular Python libraries, Flask can help streamline the process of building and deploying machine learning models. The heart failure prediction project is just one example of how Flask can be used to make machine learning more accessible to a wider audience. As the field of machine learning engineering continues to grow and evolve, it's clear that Flask will remain an important tool for developers looking to build web-based applications and interfaces for their models.
      </p>
  
       
      </div>
      </Col>
      </Row>
      </div>
      </Container>
      <Particle/>
      </div>
    )
  }

export default Flask
