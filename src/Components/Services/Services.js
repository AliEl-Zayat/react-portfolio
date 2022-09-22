import React,{useState,useEffect} from 'react'
import HeadingOfSection from '../HeadingOfSection/HeadingOfSection';
import { Col, Row } from 'react-bootstrap'
import axios from 'axios';
import Testimonials from '../Testimonials/Testimonials'
import { Container } from "@mui/system";
import './Services.css'
import { Fade } from "react-awesome-reveal";
const Services = () => {
  const [services, setService] = useState([]);
    useEffect(()=>{
        axios.get('./data.json')
        .then((res)=>{
          setService(res.data.services);
        })
    },[])

  return (
    <Container>
      <HeadingOfSection sectionName='Services' sectionPara='My Services'/>
        <Row>
          {
            services.map((service)=>(
              <Col lg='4' md='6' sm='12' key={service.id}>
                <Fade cascade direction='down' triggerOnce='true'>
                <div className="d-flex flex-column align-items-center text-center service">
                <div className="vec-holder">
                  <img src={service.image} width='200px' height='200px' alt="" />
                </div>
                <a href={service.title} className='accent-clr text-decoration-none fs-3 service-link'>{service.title}</a>
                <p className='lh-lg text-white-50'>{service.brief}</p>
                </div>
          </Fade>
              </Col>
            ))
          }
        </Row>
        <span className='py-5 w-100 d-block'></span>
        <Testimonials/>
    </Container>
  )
}

export default Services