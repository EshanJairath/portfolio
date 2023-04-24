import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import heart from "../../Assets/Projects/human-heart.png";
import flood from "../../Assets/Projects/FLood.jpg"
import ships from "../../Assets/Projects/Ships.jpeg"
import imgcla from "../../Assets/Projects/Img_classifier.jpg";
import fd from "../../Assets/Projects/fraud-detection.png";
import NLP from "../../Assets/Projects/NLP.jpg"
import instaClone from "../../Assets/Projects/instagramclone.png";
import MB from "../../Assets/Projects/MovieBlitz.png";
import EDA_1 from "./ProjectPages/NetflixEda";
import Netflix from "../../Assets/Projects/netflix.png";
import ai_system from "../../Assets/Projects/AI_system.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center">
          My Recent <strong className="purple">Projects 📊 </strong>
        </h1>
        <p className='text-center' style={{ color: "white" }}>
         👇 Here are a few projects I've worked on recently.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
      
      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={ships}
          isBlog={false}
          title="Vessel Classification with AIS data "
          description="
          This project aims to develop a machine learning classification model using LGBM to identify the type of ships in the Kattegat Strait region based on their features such as width, length, course, and speed. The dataset used in this project is extracted from open source AIS information provided by Denmark Maritime Authority (DMA). The ultimate goal of this project is to provide accurate ship classification to assist in areas such as maritime security, vessel traffic management, and environmental monitoring."
          ghLink= "https://github.com/EshanJairath/AIS-Ship_classification-"

        />
        </Col>

        <Col md={4} className="project-card">
        <ProjectCard
          imgPath={flood}
          isBlog={false}
          title="Flood Extent Prediction With Geospatial data"
          description="
          This project aimed to predict flood extents using geospatial data extracted from Google Earth Engine. A machine learning regression model was built and trained on this data, which was then used to predict floodwater percentages in a test region. The ultimate goal of this project was to assist disaster management efforts by providing accurate predictions of floodwater percentages, which can be used to inform evacuation decisions in high-risk areas."

        />
      </Col>


      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={ai_system}
          isBlog={false}
          title="AI-powered system capable of providing Investment guidance." 
          description="The AI-powered Investment guidance system is a project aimed at providing users with personalized investment advice using artificial intelligence. The system uses a combination of machine learning algorithms and natural language processing to analyze a user's financial data and risk appetite, and recommend suitable investment options. The system takes into account various factors such as the user's age, income, investment goals, and risk tolerance to provide personalized investment guidance."
          demoLink = "https://drive.google.com/file/d/1jNY1bm6FHWU430l5DS0odEIuUgkBjL4P/view?usp=sharing"
        />
      </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heart}
              isBlog={false}
              title="Heart Failure Prediction Web App"
              description="
              This project is a machine learning model that utilizes Random Forest Classification to predict the likelihood of heart failure in patients. The model is trained on patient data, including demographic information and medical history, and is able to provide accurate predictions with an accuracy rate of 94%. The model is designed as a web application, allowing users to input their own information and receive a prediction of their risk of heart failure.
              "
              ghLink="https://github.com/EshanJairath/ML_Heart-Failure"
            
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix Titles EDA "
              description="This project aims to perform an exploratory data analysis (EDA) of the Netflix streaming platform to gain insights into the viewing habits and preferences of users. The data used for this project will be obtained from publicly available sources, and it will include information on the most popular shows, genres, and release dates. The outcome of this project will be a comprehensive report on the EDA performed on the Netflix streaming platform, including the data cleaning and preprocessing steps, descriptive and inferential statistics, and data visualization results. "
              ghLink="https://github.com/EshanJairath/Netflix_Eda"
              demoLink="https://eshanjairath.github.io/Netflix_Eda/"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgcla}
              isBlog={false}
              title="Image Classifer"
              description="This project presents a convolutional neural network (CNN) model trained on the CIFAR-10 dataset, a widely-used benchmark for image classification. The model achieved an accuracy of 86% on the test set, demonstrating its ability to accurately predict images from each of the ten categories in the dataset. This project highlights the effectiveness of CNNs in image recognition tasks and the potential for further improvement with additional training and fine-tuning."
              ghLink="https://github.com/EshanJairath/CNN-image-Classifier-on-CIFAR-10"
              
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fd}
              isBlog={false}
              title="SOM Fraud Detection "
              description="
              The goal of SOM is to provide a data visualization tool that aids in the understanding of high-dimensional data by minimizing the dimension of data to map. SOM also represents the concept of clustering by grouping similar data together. I created a simple project using SOM to identify credit card fraud and return the customer IDs of the fraudulent customers."
              ghLink="https://github.com/EshanJairath/SOM_fraud-detection"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NLP}
              isBlog={false}
              title="Restaurant Review Prediction"
              description="This project presents a review prediction system designed to automatically classify customer reviews of restaurants as positive or negative. The system utilizes advanced Natural Language Processing (NLP) techniques and machine learning algorithms, including Support Vector Machines (SVMs) and Deep Learning, to analyze text data and make predictions."
              ghLink="https://github.com/EshanJairath/Restaurant-review-prediction-"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instaClone}
              isBlog={false}
              title="Instagram Clone - Pics-Watch"
              description="This project is an Instagram clone web application that has been developed using the React.js framework and Firebase for user authentication, data storage, and hosting. The application provides users with a platform to share pictures, videos, and text, similar to the Instagram app. The application's user interface is designed to be intuitive and easy to use, allowing users to easily navigate through the app's features."
              ghLink="https://github.com/EshanJairath/PicsWatch-Insta-clone"
              demoLink="https://instagram-clone-picswatch.web.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MB}
              isBlog={false}
              title="MovieBlitzz"
              description="This project is a React web application that utilizes the movie database (TMDB) API to showcase the latest movies and TV shows. The application allows users to browse movies and TV shows by title, genre, and release date. Users can also view detailed information about each movie or TV show, including the cast, plot, and trailers. The user interface is designed to be intuitive and user-friendly, making it easy for users to navigate and find the content they are looking for "
              ghLink="https://github.com/EshanJairath/MovieBlitz"
              demoLink="https://movieblitz-7feda.web.app/"       
            />
          </Col>
          
        </Row>
     
        <h1 className="project-heading mt-5">
          To view more of my <strong className="purple"> Projects</strong>, 
        </h1>
        <p style={{ color: "cyan", fontSize:'1.4em' }}>
        👉 checkout my GitHub.
        </p>
      </Container>
    </Container>
  );
}

export default Projects;
