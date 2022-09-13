import { Container } from "@mui/system";
import "./About.css";
import React,{useEffect} from "react";
import HeadingOfSection from "../HeadingOfSection/HeadingOfSection";
import { Row, Col } from "react-bootstrap";
import profilePicture from "./images/IMG_1103.JPG";
import {FaLockOpen,FaUserCheck,FaHeadset,FaLaughBeam} from 'react-icons/fa'
const About = () => {
  const counterss = () => {
    let valueDisplays = document.querySelectorAll('.nums');
    let interval = 1000;
    valueDisplays.forEach((valueDisplay) =>{
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute('data-val'));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue){
          clearInterval(counter);
        }
      },duration)
    })
  }
  useEffect(() => {
    counterss();
  },[]);
  return (
    <Container>
      <HeadingOfSection sectionName="About" sectionPara="LEARN MORE ABOUT ME" />
      <Row>
        <Col lg="4">
          <div className="profile-image-holder">
            <img
              src={profilePicture}
              className="img-fluid"
              alt="profile"
              width={"280px"}
            />
          </div>
        </Col>
        <Col className="text-white">
          <strong className="accent-clr jtitle">Full Stack Delveloper</strong>
          <br />
          <em className="statement">
            Full Stack PHP Developer uses React as a frontend Libaray, mySQl for
            database, and besides Bootstrap and other Libaray for CSS.
          </em>
          <div className="lists d-flex">
            <ul>
              <li>Freelance: Available</li>
              <li>
                {" "}
                Phone:{" "}
                <a
                  className="text-decoration-none accent-clr"
                  href="Tel:+201122006273"
                >
                  {" "}
                  +201122006273
                </a>
              </li>
              <li>Experience: 1+ Year</li>
            </ul>
            <ul>
              <li>Address: Menia ElQmh,Sharkia,Egypt</li>
              <li>Degree: Bachelor</li>
              <li>Hobby: Coding</li>
            </ul>
          </div>
          <p className="brief">
            I'm looking forward to enhancing my skills through working in
            challengable projects with a professional team, I depend mostly on
            self-learning to gain new skills
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg='3' md='6' sm='12'>
          <div className="dcard">
          <span className="abs-card">  
            <FaLockOpen/>
          </span>
          <h3 className="nums text-white" data-val='70+'>
            0
          </h3>
          <p className="accent-clr">Projects</p>
            </div>
        </Col>
        <Col lg='3' md='6' sm='12'>
        <div className="dcard">
          <span className="abs-card">
            <FaUserCheck/>
          </span>
          <h3 className="nums text-white" data-val='5'>
            0
          </h3>
          <p className="accent-clr">Clients</p>
        </div>
        </Col>
        <Col lg='3' md='6' sm='12'>
        <div className="dcard">

          <span className="abs-card">
            <FaHeadset/>
          </span>
          <h3 className="nums text-white" data-val='300'>
            0
          </h3>
          <p className="accent-clr">Hours Of Support</p>
        </div>
        </Col>
        <Col lg='3' md='6' sm='12'>
        <div className="dcard">

          <span className="abs-card">
            <FaLaughBeam/>
          </span>
          <h3 className="nums text-white" data-val='30'>
            0
          </h3>
          <p className="accent-clr" id="happSup">Happy Supported</p>
        </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
