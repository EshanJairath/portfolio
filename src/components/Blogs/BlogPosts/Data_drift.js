import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Particle from '../../Particle'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import copy from 'copy-to-clipboard';
import data_drift from '../../../Assets/Blogs/data_drift.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Data_drift() {
  var codeString = ` # Importing libraries
  from sklearn.datasets import make_classification
  from sklearn.linear_model import LogisticRegression
  from sklearn.metrics import accuracy_score
  
  # Generating training and test data
  X_train, y_train = make_classification(n_samples=1000, n_features=5, n_classes=2, random_state=42)
  X_test, y_test = make_classification(n_samples=1000, n_features=5, n_classes=2, random_state=43)
  
  # Training a logistic regression model
  clf = LogisticRegression()
  clf.fit(X_train, y_train)
  
  # Making predictions on test data
  y_pred = clf.predict(X_test)
  
  # Calculating accuracy
  accuracy = accuracy_score(y_test, y_pred)
  print("Accuracy:", accuracy)
  
   `

var codeString_2 = `# Importing libraries
from sklearn.datasets import make_classification
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Generating initial training data
X_train, y_train = make_classification(n_samples=1000, n_features=5, n_classes=2, random_state=42)

# Training a logistic regression model
clf = LogisticRegression()
clf.fit(X_train, y_train)

# Continuously generating new test data
for i in range(10):
    X_test, y_test = make_classification(n_samples=1000, n_features=5, n_classes=2, random_state=i)
    y_pred = clf.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print("Accuracy:", accuracy)
    X_train = X_test
    y_train = y_test
    clf.fit(X_train, y_train)`
  
  function handleCopy_1() {
    toast('Code Copied To Clipboard !')
    copy(codeString);
  }
  function handleCopy_2() {
    toast('Code Copied To Clipboard !')
    copy(codeString_2);
  }
  return (
    <div className='BlogContainer'>
    
    <Container>
    <div className='container'>
    
    <h1> <span className='purple'>D</span>ata  <span className='purple'>D</span>rift</h1>
    <p style={{color:'cyan'}}>Data Science  <span style={{color:'white'}} > | 25 January 2023 .</span></p>
  

    <Row>
    <Col md = {6} className='blog_col mt-5'>
    <p className='blog_post_paragraph' style={{color:'cyan'}}> What is Data Drfit ? </p>

    <p className='blog_post_paragraph'>
    Data drift is a phenomenon that occurs when the distribution of the data that a machine learning model is trained on differs significantly from the distribution of the data it is subsequently applied to. This can lead to a decline in model performance, and is a common problem in data science. In this Blog I am going disscuss everything about data drfit, what causes it, how to address it and how to detect it.  
    </p>

    <p className='blog_post_paragraph' style={{color:'cyan'}}> So, What causes this Data Drfit ? </p>

    <p className='blog_post_paragraph'>
    There are several causes of data drift. One is concept drift, which occurs when the underlying concept or task the model is trying to learn changes over time. For example, a model trained to detect fraudulent financial transactions may become less effective as fraudsters adapt their tactics. Another cause is non-stationarity, which occurs when the distribution of the data changes over time, for example, due to seasonal or economic factors.
    </p>

    <p className='blog_post_paragraph' style={{color:'cyan'}}> How to address Data Drfit ? </p>

    <p className='blog_post_paragraph'>
    There are several approaches to addressing data drift. One is to continually retrain the model on new data, known as online learning. This can be done periodically or in real-time, depending on the application and the rate of change of the data. Another approach is to use ensemble methods, where multiple models are trained and combined to improve robustness to data drift.</p>

    <p className='blog_post_paragraph'> Another approach is to use domain adaptation techniques, which aim to align the distribution of the training and test data by reducing the discrepancy between them. This can be done by using techniques such as weighting the loss function, adapting the features, or using domain-specific preprocessing steps.
     </p>

     <p className='blog_post_paragraph'>One approach is to use ensemble methods, where multiple models are trained and combined to improve robustness to data drift. There are various techniques to detect data drift such as monitoring the performance of the model over time, comparing the distribution of the training</p>   

     <p className='blog_post_paragraph' style={{color:'cyan'}}>Detecting Data Drift </p>
    <p className='blog_post_paragraph'>
     There are various techniques to detect data drift. These include monitoring the performance of the model over time, comparing the distribution of the training and test data, and using statistical tests to detect changes in the data.
    </p>

    <p className='blog_post_paragraph' style={{color:'cyan'}}> The Conclusion</p>

    <p className='blog_post_paragraph'>
    In conclusion, data drift is a common problem in data science and occurs when the distribution of the data that a machine learning model is trained on differs significantly from the distribution of the data it is subsequently applied to. There are several approaches to addressing data drift, including retraining the model, using ensemble methods, and domain adaptation techniques. Additionally, various techniques can be used to detect data drift.
    </p>
    


    </Col>
    
    <Col md={6} className='p-3'>
    <img src={data_drift} className='mx-auto d-flex blog_title_img' alt=""/>
    <div className='container mt-5'>
      <h1 className=''>Here's an <span className='purple'>Example</span> in Python of how data drift can occur:</h1>
      <p className='blog_post_paragraph' style={{color:'cyan'}}>
      
      </p>
      <SyntaxHighlighter className='code_example' language='python' style={atomOneDark}>
      {codeString}
      </SyntaxHighlighter>
      <ToastContainer />
      <Button onClick={handleCopy_1} variant='primary'> Copy to clipboard</Button>
      <p className='blog_post_paragraph'> In the above example, we generate training and test data using the make_classification function from scikit-learn. We then train a logistic regression model on the training data and make predictions on the test data. The test data is generated with a different random seed, resulting in a different distribution of data than the training data. As a result, the model's accuracy on the test data may be lower than expected. </p>
      <hr/>
      <p className='blog_post_paragraph'>To address data drift, One approach is to continually retrain the model on new data, known as online learning. Here's an example of how this can be done:
      </p>

      <SyntaxHighlighter className='code_example' language='python' style={atomOneDark}>
      {codeString_2}
      </SyntaxHighlighter>
      <Button onClick={handleCopy_2} variant='primary'> Copy to clipboard</Button>
      <ToastContainer />
      <p className='blog_post_paragraph'>In this example, we continuously generate new test data and update the training data with the test data. The model is then retrained on the new training data, allowing it to adapt to changes in the data distribution</p>

    </div>
    </Col>
    
    </Row>

    </div>
    
    </Container>
    <Particle/>
    </div>
  )
}

export default Data_drift
