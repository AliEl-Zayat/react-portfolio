import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Row } from 'react-bootstrap';
import { Container } from "@mui/system";
import { FaWhatsapp, FaPhoneAlt, FaFacebook, FaLinkedin } from "react-icons/fa";
import HeadeingOfSection from '../HeadingOfSection/HeadingOfSection'
import './Contact.css'
import { Fade } from 'react-awesome-reveal';
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_damf879', 'template_iyiox5r', form.current, 'pILYdhhhn5m_AWF-i')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <Container>
      <HeadeingOfSection sectionName='Contact' sectionPara='Here you can contact me' />
      <Row>
        <Col lg='7' sm='12'>
        <Fade direction='left' triggerOnce='true'>
          <div className="socials d-flex flex-column justify-content-center">
            <div className="wApp">
              <a className='text-decoration-none accent-clr d-flex gap-4 align-items-center social-contact' href="https://api.whatsapp.com/send?phone=201122006273" target='_blank' rel='noreferrer'>
                <FaWhatsapp />
                <p>+2011 22 00 6273</p>
              </a>
              <a className='text-decoration-none accent-clr d-flex gap-4 align-items-center social-contact' href='teletel:+201023433322' target='_blank' rel='noreferrer'>
                <FaPhoneAlt />
                <p>Call Me</p>
              </a>
              <a className='text-decoration-none accent-clr d-flex gap-4 align-items-center social-contact' href="https://www.facebook.com/ali.elzayat.9619/" target='_blank' rel='noreferrer'>
                <FaFacebook />
                <p>Facebook</p>
              </a>
              <a className='text-decoration-none accent-clr d-flex gap-4 align-items-center social-contact' href="https://www.linkedin.com/in/ali-el-zayat-736061149/" target='_blank' rel='noreferrer'>
                <FaLinkedin />
                <p>Linkedin</p>
              </a>
            </div>
          </div>
          </Fade>
        </Col>
        <Col lg='5' sm='12'>
        <Fade direction='right' triggerOnce='true'>
          <form ref={form} className='d-flex flex-column gap-4 justify-content-center contact-form' onSubmit={sendEmail}>
            <div className="name-wrapper position-relative w-100">
              <input type="text" name="user_name" id='username' required />
              <label id='name-label'>Name</label>
            </div>
            <div className="e-mail-wrapper position-relative w-100">
              <input type="email" name="user_email" required />
              <label id='email-label'>Email</label>
            </div>
            <div className="message-wrapper position-relative w-100">
              <textarea name="message" required />
              <label id='message-label'>Message</label>
            </div>
            <input type="submit" value="Send" className='btn btn-outline-info my-btn' />
          </form>
          </Fade>
        </Col>


      </Row>
    </Container>
  );
};
export default Contact;