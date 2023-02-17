import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Particle from '../../Particle'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import copy from 'copy-to-clipboard';
import strat from '../../../Assets/Blogs/stratified.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Stratification() {
  var codeString = ` # Importing libraries
  from sklearn.datasets import make_classification
  from sklearn.model_selection import train_test_split
  
  # Generating a dataset with imbalanced class distribution
  X, y = make_classification(n_classes=2, class_sep=2,
                             weights=[0.1, 0.9], n_informative=3,
                             n_redundant=1, flip_y=0, n_features=20,
                             n_clusters_per_class=1, n_samples=1000,
                             random_state=10)
  
  # Using stratified sampling to split the dataset
  X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, 
                                                    stratify=y, random_state=1)
  
   `


  
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
    <h1> <span className='purple'>S</span>tratification of Data to <span className='purple'>M</span>itigate Bias</h1>
    <p style={{color:'cyan'}}>Data Science  <span style={{color:'white'}} > | 17 February 2023 .</span></p>

    <p className='blog_post_paragraph' style={{color:'cyan'}}> Something about Mitigating Bias  </p>

    <p className='blog_post_paragraph'>
    Mitigating bias in data science refers to the process of identifying and addressing any systematic errors or inaccuracies in a dataset or a machine learning model that may lead to inaccurate or unfair predictions. Bias can occur in a variety of forms, such as sampling bias, measurement bias, or algorithmic bias.  
    </p>

    <p className='blog_post_paragraph'>
    Sampling bias occurs when the data used to train a model is not representative of the population it is supposed to model. For example, a dataset that is mostly composed of individuals from a certain race or gender, while the population it is supposed to model is more divers
    </p>


    <p className='blog_post_paragraph'>
    Measurement bias occurs when the data collection process leads to inaccurate or incomplete data. For example, a survey that is only distributed in English would be biased towards English speakers.</p>

    <p className='blog_post_paragraph'> Algorithmic bias occurs when a machine learning model is trained on biased data and replicates those biases in its predictions. For example, a model that is trained on a dataset where women are underrepresented in certain professions might be more likely to predict that men are more suitable for those professions.
     </p>

     <p className='blog_post_paragraph'>Mitigating bias in data science requires identifying the sources of bias and taking steps to address them. This can include techniques such as stratifying data, oversampling or undersampling and using unbiased algorithms. Additionally, it is important to be aware of the potential for bias and to continuously monitor and evaluate the performance of models to ensure they are making fair and accurate predictions.</p>   

     <p className='blog_post_paragraph' style={{color:'cyan'}}>What is Stratification? </p>
    <p className='blog_post_paragraph'>
    Stratification of data is a technique used in data science to ensure that different groups within a dataset are represented fairly and proportionately. This is particularly important when working with datasets that have imbalanced class distributions, as this can lead to bias in the model's predictions
    </p>

    <p className='blog_post_paragraph'>
    One common example of bias in machine learning is when a dataset is not representative of the population it is supposed to model. For example, a dataset may be mostly composed of individuals from a certain race or gender, while the population it is supposed to model is more diverse. This can lead to a biased model that performs well on the training dataset but poorly on unseen data.

    </p>
    


    </Col>
    
    <Col md={6} className='p-3'>
    <img src={strat} className='mx-auto d-flex blog_title_img' alt=""/>
    <div className='container mt-5'>

    <p className='blog_post_paragraph'>
Stratification is a method of ensuring that the different groups within a dataset are represented fairly and proportionately. It involves dividing the dataset into subgroups based on certain characteristics, such as race, gender, or age, and then randomly selecting samples from each subgroup to ensure that the proportions of the different groups in the dataset match the proportions in the population.
    </p>
      <h1 className=''>Here is an 
      <span className='purple'> example </span> of how to use stratification in Python using the scikit-learn library:</h1>
      <p className='blog_post_paragraph' style={{color:'cyan'}}>
      
      </p>
      <SyntaxHighlighter className='code_example' language='python' style={atomOneDark}>
      {codeString}
      </SyntaxHighlighter>
      <ToastContainer />
      <Button onClick={handleCopy_1} variant='primary'> Copy to clipboard</Button>

      <p className='blog_post_paragraph'>Stratification of data is an effective way to mitigate bias in datasets with imbalanced class distributions. It ensures that the different groups within a dataset are represented fairly and proportionately, leading to more robust and accurate models. However, it is important to note that stratification alone might not be enough to mitigate bias in some cases, and other techniques such as oversampling or undersampling may be required. </p>

      <hr/>

      <p className='blog_post_paragraph'>In conclusion, stratification of data is an important technique in data science that ensures that different groups within a dataset are represented fairly and proportionately. By using stratification, we can mitigate bias in datasets with imbalanced class distributions and build more robust and accurate models. It is important to consider stratification as a technique for handling bias in data science projects, especially when dealing with imbalanced datasets.
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

export default Stratification
