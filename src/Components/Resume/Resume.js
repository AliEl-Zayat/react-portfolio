import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import './Resume.css'
import HeadingOfSection from '../HeadingOfSection/HeadingOfSection'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import { FaBookReader, FaSwimmingPool, FaCode, FaGamepad } from 'react-icons/fa'
import TimeLine from '../TimeLine/TimeLine'
import { Fade } from "react-awesome-reveal";
const Resume = (props) => {
    const [skills, setSkill] = useState([]);
    useEffect(() => {
        axios.get('./data.json')
            .then((res) => {
                setSkill(res.data.skills);
            })
    }, [])
    const widthApplied = () => {
        document.querySelectorAll('#percent').forEach(ele => {
            ele.classList.remove('active');
        });
    }
    useEffect(() => {
        widthApplied()
    });
    return (
        <Container>
            <HeadingOfSection sectionName='Resume (CV)' sectionPara="You can check my cv here" />
            <Fade direction='up' cascade triggerOnce='true'>
                <a href="https://drive.google.com/file/d/1zxKOc1AwnPrmhzGcXeDpGO0BE_8ijzRz/view?usp=sharing" target='_blank' className='btn btn-outline-info my-btn w-25 mx-auto d-block mb-5' rel='noreferrer'>Download</a>
                <hr className='mb-5' />
            </Fade>
            <HeadingOfSection className='my-5' sectionName='Education' sectionPara="LEARN MORE ABOUT MY Education" />
            <TimeLine />
            <HeadingOfSection sectionName='Skills' sectionPara="LEARN MORE ABOUT MY SKILLS" />
            <Row>
                {

                    skills.map((skill) => (
                        <Col lg='6' md='6' key={skill.id}>
                            <Fade direction='up' cascade triggerOnce='true'>
                                <div className="skill">
                                    <h4 className="skill-title text-white">{skill.language}</h4>
                                    <i className={skill.icon}></i>
                                    {/* <span dangerouslySetInnerHTML={{__html: skill.icon}}></span> */}
                                    <div className="probar">
                                        <span id="percent" className="skill-progbar active" style={{ transition: '1s 0.5s width ease-in', width: skill.percentage }}></span>
                                    </div>
                                    {/* <span className="floatingpercent" id="FloatingPercentage">{skill.percentage}</span> */}
                                </div>
                            </Fade>
                        </Col>
                    )
                    )
                }
            </Row>
            <Row>
                <HeadingOfSection className='my-5' sectionName='Hoppies' sectionPara="LEARN MORE ABOUT MY Hoppies" />

                <Col lg='3' md='6'>
                    <Fade direction='left' cascade triggerOnce='true'>
                        <div className="interest text-white">
                            <FaBookReader className='interesticon' />
                            <h3>Reading</h3>
                        </div>
                    </Fade>
                </Col>
                <Col lg='3' md='6'>
                    <Fade direction='left' cascade triggerOnce='true'>
                        <div className="interest">
                            <FaSwimmingPool className='interesticon' />
                            <h3>Swimming</h3>
                        </div>
                    </Fade>
                </Col>
                <Col lg='3' md='6'>
                    <Fade direction='right' cascade triggerOnce='true'>
                        <div className="interest">
                            <FaCode className='interesticon' />
                            <h3>Coding</h3>
                        </div>
                    </Fade>
                </Col>
                <Col lg='3' md='6'>
                <Fade direction='right' cascade triggerOnce='true'>

                    <div className="interest">
                        <FaGamepad className='interesticon' />
                        <h3>Gaming</h3>
                    </div>
                    </Fade>
                </Col>
            </Row>
        </Container>
    )
}

export default Resume