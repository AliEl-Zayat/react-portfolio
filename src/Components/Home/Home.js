import React from 'react'
import LandingBG from './Images/header-bg.jpg'
import './Home.css'
import {FaTiktok,FaFacebookF,FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'
import { Container } from '@mui/system'
import { TypeAnimation } from 'react-type-animation';
const Home = () => {
  return (
    <>
    <span className='overlay'></span>
    <img src={LandingBG} alt="background" className='home-background'/>
    <Container className='home-content'>
      <div className="landing">
        <div className="landing-texts">
        <TypeAnimation
      sequence={[
        'Ali', // Types 'One'
        1000, // Waits 1s
        'Shireef', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        'El-Zayat',
        2000, // Waits 2s
        'Ali Shireef El-Zayat', // Types 'Three' without deleting 'Two'
      ]}
      wrapper="h1"
      className='landing-heading'
      cursor={true}
    />
          <p className='landing-para'>i'm a Full-<span className='underlined'>Stack Developer</span></p>
        </div>
    <div className="landing-icons d-flex gap-4">
      <a href='https://www.tiktok.com/@zayat97' className="icon" target='_blank' rel="noreferrer">
      <FaTiktok color='white'/>
      </a>
      <a href='https://www.facebook.com/ali.elzayat.9619/' className="icon" target='_blank' rel="noreferrer">
      <FaFacebookF color='white'/>
      </a>
      <a href='https://www.instagram.com/ali.elzayat.9619/' className="icon" target='_blank' rel="noreferrer">
      <FaInstagram color='white'/>
      </a>
      <a href='https://www.linkedin.com/in/ali-el-zayat-736061149/' className="icon" target='_blank' rel="noreferrer">
      <FaLinkedin color='white'/>
      </a>
      <a href='https://github.com/AliEl-Zayat' className="icon" target='_blank' rel="noreferrer">
      <FaGithub color='white'/>
      </a>
    </div>
      </div>

    </Container>
    </>
  )
}

export default Home