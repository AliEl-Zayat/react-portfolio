import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdSchool,MdWork} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
const TimeLine = () => {
  return (
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'var(--main-color)', color: '#121212' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - present"
    iconStyle={{ background: 'var(--main-color)', color: '#fff' }}
    icon={<MdWork />}
  >
    <h3 className="vertical-timeline-element-title">Full-Stack Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">HTML5 - CSS3 - Javascript - React JS</h4>
    <p>
      User Experience, Visual Designs, Effectient Worker and Committed person
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - 2020"
    iconStyle={{ background: '#121212', color: 'var(--main-color)' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title text-black">Arduino Multi -Tasking Armed Robot </h3>
    <h4 className="vertical-timeline-element-subtitle text-black">C++ Arduino</h4>
    <p className='text-black'>
      Creative Direction, Mechanics , Visual Capture ,Fully Functional
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - 2020"
    iconStyle={{ background: '#121212', color: 'var(--main-color)' }}
    icon={<AiFillStar />}
  >
    <h3 className="vertical-timeline-element-title text-black">Oracle DB for student</h3>
    <h4 className="vertical-timeline-element-subtitle text-black">Cloud Orcale Database</h4>
    <p className='text-black'>
      Cloud Platform , Database
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2018 - 2019"
    iconStyle={{ background: '#121212', color: 'var(--main-color)' }}
    icon={<AiFillStar />}
  >
    <h3 className="vertical-timeline-element-title text-black">Database Management Application</h3>
    <h4 className="vertical-timeline-element-subtitle text-black">C# with SQL</h4>
    <p className='text-black'>
      Visual Design , Graphical User Interface , Database
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  )
}

export default TimeLine