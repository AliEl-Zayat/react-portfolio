import React from 'react'
import './HeadingOfSection.css'
import { Fade } from "react-awesome-reveal";
const HeadingOfSection = (props) => {
  return (
    <div className='hos'>
      <Fade direction='left' triggerOnce='true'>
      <div className='d-flex align-items-center gap-3'>
        <h3 className='section-heading'>{ props.sectionName }</h3>
        <span className='heading-span'></span>
      </div>
      <h3 className='learn-more'> {props.sectionPara}</h3>
      </Fade>
    </div>
  )
}

export default HeadingOfSection