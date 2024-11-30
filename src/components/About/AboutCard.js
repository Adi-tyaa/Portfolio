import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Guys I'm  <span className="purple">Aditya Prakash </span>
            from <span className="purple"> Bihar , India.</span>
            <br />
            <br />
            I completed my Bachelor of Techonolgy from
            <br />
            Dronacharya College of Engineering & Techonolgy , Haryana
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket 
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card> 
  );
}

export default AboutCard;
