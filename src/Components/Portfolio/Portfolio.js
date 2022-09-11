import React,{useState,useEffect,useRef} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Portfolio.css'
import HeadingOfSection from '../HeadingOfSection/HeadingOfSection'
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Portfolio = () => {
    const [projects, setProject] = useState([]);
    useEffect(() => {
        axios.get('./data.json')
        .then((res)=>{
            setProject(res.data.projects);
        })
    }, []);
  return (
    <Container>
        <HeadingOfSection sectionName='Portfolio' sectionPara='Here is some of my  projects'/>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
            {
                projects.map((project)=>(
                    <SwiperSlide key={project.id}>
                        <a href={project.url} target='_blank' rel='noreferrer'>
                        <div className="project">
                        <div className="project-img">
                        <img src={project.image} alt="" className='img-fluid'/>
                        </div>
                        <div className="project-texts">
                        <h3>{project.title}</h3>
                        </div>
                        </div>
                        </a>

                    </SwiperSlide>
                ))
            }
        </Swiper>
    </Container>
  )
}

export default Portfolio