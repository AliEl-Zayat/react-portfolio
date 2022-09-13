import React, { useState, useEffect } from 'react'
import './Testimonials.css'
import HeadeingOfSection from '../HeadingOfSection/HeadingOfSection'
import axios from 'axios';
import { Container } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const Testimonials = () => {
    const [testimonials, setTestimonial] = useState([]);
    useEffect(() => {
        axios.get('./data.json')
            .then((res) => {
                setTestimonial(res.data.testimonials);
            })
    }, [])
    return (
        <Container>
            <HeadeingOfSection sectionName='Testimonials' sectionPara='My beloved clients' />
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            950:{
                slidesPerView: 3,
                spaceBetween: 40

              }
          }}
      >
            {
                testimonials.map((testimonial) => (
                    <SwiperSlide className='testi-slide' key={testimonial.id}>
                        <div className="testimonial">
                            <div className="user">
                                <div className="user-img-wrapper">
                                    <img src={testimonial.image} alt="" />
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <h4>{testimonial.number}</h4>
                                    <p className='text-black-50'>~{testimonial.name}</p>
                                </div>
                            </div>
                            <p className="message">{testimonial.message}</p>
                            <p className="text-black-50 time">{testimonial.time}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </Container>
    )
}

export default Testimonials