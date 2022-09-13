import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import './Resume.css'
import HeadingOfSection from '../HeadingOfSection/HeadingOfSection'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import {FaBookReader,FaSwimmingPool,FaCode,FaGamepad} from 'react-icons/fa'
const Resume = (props) => {
    const [skills, setSkill] = useState([]);
    useEffect(()=>{
        axios.get('./data.json')
        .then((res)=>{
            setSkill(res.data.skills);
        })
    },[])
    const widthApplied = () => {
        document.querySelectorAll('#percent').forEach(ele => {
            ele.classList.remove('active');
        });
    }
    useEffect(() => {
        widthApplied();
    });
  return (
    <Container>
    <HeadingOfSection sectionName='Skills' sectionPara="LEARN MORE ABOUT MY SKILLS"/>
    <Row>
    {
        skills.map((skill) => (
            <Col lg='6' md='6' key={skill.id}> 
                <div className="skill">
                            <h4 className="skill-title text-white">{skill.language}</h4>
                            <i className={skill.icon}></i>
                            {/* <span dangerouslySetInnerHTML={{__html: skill.icon}}></span> */}
                            <div className="probar">
                                <span id="percent" className="skill-progbar active" style={{transition:'1s 0.5s width ease-in',width: skill.percentage}}></span>
                            </div>
                            {/* <span className="floatingpercent" id="FloatingPercentage">{skill.percentage}</span> */}
                </div>
            </Col>
            )
            )
        }
    </Row>
    <Row>
        <Col lg='3' md='6'>
        <div className="interest text-white">
            <FaBookReader className='interesticon'/>
            <h3>Reading</h3>
        </div>
        </Col>
        <Col lg='3' md='6'>
        <div className="interest">
           <FaSwimmingPool className='interesticon'/>
                    <h3>Swimming</h3>
                </div>
        </Col>
        <Col lg='3' md='6'>
        <div className="interest">
            <FaCode className='interesticon'/>
                    <h3>Coding</h3>
                </div>
        </Col>
        <Col lg='3' md='6'>
        <div className="interest">
            <FaGamepad className='interesticon'/>
                    <h3>Gaming</h3>
                </div>
        </Col>
    </Row>
    </Container>
  )
}

export default Resume