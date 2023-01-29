import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


function AboutCard() {
  return (
    <div>
    <Card className="quote-card-view">
      <Card.Body>
       
          <p className="about_text" style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Eshan Jairath </span>
            from New Delhi, India currenlty living in Newcastle Upon Tyne, United Kingdom. 
            As a skilled individual, I have expertise in a range of fields related to computer science🧑‍💻 and artificial intelligence 🤖. I have a deep understanding of data structures and algorithms, with a strong background in programming, specifically in Python 🐍 and JavaScript. 
            <br/>
            </p>

            <p className="about_text" style={{ textAlign: "justify" }}>
            I am well-versed in a range of System analysis and design, machine learning, deep learning, computer vision, and hold a Master's degree in Artificial Intelligence 🎓 as well.
            I have a strong specialization in developing web applications with machine learning API's. I have experience working with a variety of databases🗂️ including MongoDB, SQL, and Firebase, and am proficient in cloud technologies ☁️, specifically Microsoft Azure. <span  style={{ color: "cyan" }}> (which I am certified in) </span>🏅.<br/>
            </p>
            
            <p className="about_text" style={{ textAlign: "justify" }}>
            This combination of skills and education makes me highly qualified to work on a wide range of projects involving machine learning, data analysis, data science, software development, and web development. I am well-equipped 💪 to tackle complex challenges and am dedicated to staying up-to-date with the latest developments in my field.
            </p>

      
            <br/>
            <p className="about_text" > What keeps me going - </p>
            <div className="blockquote">
          <p className="about_text" style={{ color: "rgb(155 126 172)" }}>
            " Every Great Warrior was once a defenceless child, continuously learning, evolving and waiting for his opportunity to incentivize the world. " {" "}
          </p>
          <footer className="blockquote-footer">Eshan Jairath</footer>
        </div>
      </Card.Body>
    </Card>


    </div>
  );
}

export default AboutCard;
