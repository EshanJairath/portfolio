import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Particle from '../../Particle'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import copy from 'copy-to-clipboard';
import diff_priv from '../../../Assets/Blogs/diff_pri.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function BlogPost() {
  var codeString = `
import numpy as np

def laplace_mechanism(data, epsilon, sensitivity):
    """
    Add noise to data using Laplace mechanism
    :param data: data to be perturbed
    :param epsilon: privacy budget
    :param sensitivity: sensitivity of the function
    :return: perturbed data
    """
    noise = np.random.laplace(loc=0, 
                              scale=sensitivity / epsilon,
                              size=data.shape)

    perturbed_data = data + noise
    return perturbed_data

data = np.array([100, 0, 100, 100, 0, 100])
epsilon = 0.5
sensitivity = 0.5

perturbed_data = laplace_mechanism(data,
                                   epsilon,
                                   sensitivity)

print('original Data => {}'.format(data))
print(' ')

print('Noise => {}'.format(perturbed_data - data))
print(' ')

print('New Data => {}'.format(perturbed_data))
  `

var outputString = `original Data => 
[100   0 100 100   0 100]
 
Noise =>
[ 0.41782216  2.95076722 -0.5121934   1.447821    0.27669976 -0.36923785]
 
New Data =>
[100.41782216   2.95076722  99.4878066  101.447821     0.27669976
  99.63076215]`
  
  function handleCopy() {
    toast('Code Copied To Clipboard !')
    copy(codeString);
  }
  
  return (
    <div className='BlogContainer'>
    
    <Container>
    <div className='container'>
    
    <h1> <span className='purple'>D</span>ifferential  <span className='purple'>P</span>rivacy.</h1>
    <p style={{color:'cyan'}}>Data Science  <span style={{color:'white'}} > | 19 January 2023 .</span></p>
  

    <Row>
    <Col md = {6} className='blog_col mt-5'>
    <p className='blog_post_paragraph' style={{color:'cyan'}}>Small Introduction to importance of Privacy</p>

    <p className='blog_post_paragraph'>
    Let's say you want to purchase a product, be it a watch, a hair dryer, a smartphone, or even an online subscription. You begin browsing the web to see what various brands have to offer when all of a sudden you realise how well-informed the recommendations you are getting are, as if the companies are aware of your exact needs. Consider YouTube or Instagram as examples. We are all aware that these apps surreptitiously gather our data in order to improve their services and overall product experience. Because we as individuals want some privacy for our data, but they as an organisation need data to improve their product and generate more revenue. 
    </p>

    <p className='blog_post_paragraph' style={{color:'cyan'}}> But why should you be concerned about your data ?</p>

    <p className='blog_post_paragraph'>
    Let's just see the power of data with this example - <br/>
    Assume that two reports are generated from the location and salary information that ten participants share. A salary report that combines data from New York, San Francisco, and Seattle to show average pay
    We learn from a worker location report that one person, or 10% of the study participants, is based in Seattle.
    We can quickly ascertain the precise salary of the participant who is based in Seattle from these two reports. Anyone reading both studies and who knows a Seattle resident who took part now knows that person's salary.
    
    <img className='mx-auto d-flex text-center Blog_img_within'  src="https://learn.microsoft.com/en-us/training/wwl-data-ai/explore-differential-privacy/media/09-reveal-analysis.png" alt=""/>
    
    <br/>
    The source of the above example is available <a href="https://learn.microsoft.com/en-us/training/modules/explore-differential-privacy/1-introduction">here.</a>
    </p>

   

    <p className='blog_post_paragraph' style={{color:'cyan'}}>This is Where Differential Privacy Comes into Picture.</p>
    <p className='blog_post_paragraph'>
    Differential privacy is a rapidly growing field in data science that aims to protect the privacy of individuals whose data is being collected and analyzed. It is a set of techniques and mathematical concepts that allow data scientists to balance the need for privacy with the need for data-driven insights. In this blog, I will explore the concept of differential privacy and its importance in data science.
    </p>

    <p className='blog_post_paragraph' style={{color:'cyan'}}>How does It Work ?</p>
    <p className='blog_post_paragraph'>
    The concept of adding noise to the data in a way that makes it difficult to ascertain the original values is the foundation of differential privacy. This can be accomplished by transforming the data mathematically or by adding random values to the data. This is done in order to prevent any information that is disclosed about a group of people from allowing the identification of any particular person within that group.
    </p>
    <p className='blog_post_paragraph'>
    The use of privacy budgets is a key method in differential privacy. A privacy budget is a measure of how much privacy is sacrificed to obtain a certain level of information about a group of people. For example, if a privacy budget is set at 0.1, any individual in the group has a 1 in 10 chance of being identified based on the information released.
    </p>
    <p className='blog_post_paragraph'>
    Differential privacy can be used in a variety of data science applications, such as machine learning, natural language processing, and computer vision. Differential privacy, for example, can be used in machine learning to protect the privacy of individuals whose data is used to train models, whereas it can be used in natural language processing to protect the privacy of individuals whose text data is being analysed.
    </p>
    <p className='blog_post_paragraph'>
    Differential privacy is critical in data science and cannot be overstated. With the growing amount of data being collected and analysed, it is critical that we take steps to protect individuals' privacy. Differential privacy enables data scientists to gain valuable insights from data while protecting individuals' privacy. It is an important tool in the data science toolbox.
    </p>
    <p className='blog_post_paragraph' style={{color:'cyan'}}>The Conclusion</p>
    <p className='blog_post_paragraph'>
    To summarise, differential privacy is an important concept in data science that aims to protect individuals' privacy while still allowing valuable insights to be gained from their data. It is accomplished by employing techniques such as adding noise to data and utilising privacy budgets. It is our responsibility as data scientists to use these techniques while also respecting the privacy of the individuals whose data we are working with.
    </p>
    </Col>
    
    <Col md={6} className='p-3'>
    <img src={diff_priv} className='mx-auto d-flex blog_title_img' alt=""/>
    <div className='container mt-5'>
      <h1 className=''> <span className='purple'>Example</span> of Differential Privacy</h1>
      <p className='blog_post_paragraph' style={{color:'cyan'}}>By adding noise to data using Laplace mechanism.</p>
      <SyntaxHighlighter className='code_example' language='python' style={atomOneDark}>
      {codeString}
      </SyntaxHighlighter>
      <ToastContainer />
      <Button onClick={handleCopy} variant='primary'> Copy to clipboard</Button>
      <h2 className='mt-5'> <span className='purple'>Output</span>  of the above code</h2>
      <SyntaxHighlighter className='code_example' language='python' style={atomOneDark}>
      {outputString}
      </SyntaxHighlighter>


    </div>
    </Col>
    
    </Row>

    </div>
    
    </Container>
    <Particle/>
    </div>
  )
}

export default BlogPost
