import React from 'react'
import './HeadingOfSection.css'
const HeadingOfSection = (props) => {
  return (
    <div className='hos'>
      <div className='d-flex align-items-center gap-3'>
        <h3 className='section-heading'>{ props.sectionName }</h3>
        <span className='heading-span'></span>
      </div>
      <h3 className='learn-more'> {props.sectionPara}</h3>
    </div>
  )
}

export default HeadingOfSection