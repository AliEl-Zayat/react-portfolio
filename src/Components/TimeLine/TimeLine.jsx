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
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title accent-clr">Arduino Multi -Tasking Armed Robot </h3>
    <h4 className="vertical-timeline-element-subtitle accent-clr">C++ Arduino</h4>
    <p className='accent-clr'>
      Creative Direction, Mechanics , Visual Capture ,Fully Functional
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AiFillStar />}
  >
    <h3 className="vertical-timeline-element-title accent-clr">Oracle DB for student</h3>
    <h4 className="vertical-timeline-element-subtitle accent-clr">Cloud Orcale Database</h4>
    <p className='accent-clr'>
      Cloud Platform , Database
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2018 - 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AiFillStar />}
  >
    <h3 className="vertical-timeline-element-title accent-clr">Database Management Application</h3>
    <h4 className="vertical-timeline-element-subtitle accent-clr">C# with SQL</h4>
    <p className='accent-clr'>
      Visual Design , Graphical User Interface , Database
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  )
}

export default TimeLine