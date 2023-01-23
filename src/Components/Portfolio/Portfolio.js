import React, { useState, useEffect } from "react";
import { Container } from "@mui/system";
import "./Portfolio.css";
import HeadingOfSection from "../HeadingOfSection/HeadingOfSection";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import { Col, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Portfolio = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    axios.get("./data.json").then((res) => {
      setProject(res.data.projects);
    });
  }, []);
  return (
    <Container>
      <HeadingOfSection
        sectionName="Portfolio"
        sectionPara="Here is some of my  projects"
      />
      <Row>
        {projects.map((project) => (
          <Col lg="6" sm="12" key={project.id}>
            <Fade cascade direction="up" triggerOnce="true">
              <a href={project.url} target="_blank" rel="noreferrer">
                <div className="project">
                  <div className="project-img">
                    <LazyLoadImage
                      alt={project.title}
                      src={project.image}
                      className="img-fluid"
                    />
                    {/* Installed Lazy loading so disabled normal image element */}
                    {/* <img src={project.image} alt="" className="img-fluid" /> */}
                  </div>
                  <div className="project-texts px-5">
                    <h3 className="text-center text-uppercase">
                      {project.title}
                    </h3>
                    <p className="accent-clr text-center text-capitalize">
                      {project.brief}
                    </p>
                    <p className="accent-clr text-center">{project.used}</p>
                  </div>
                </div>
              </a>
            </Fade>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
