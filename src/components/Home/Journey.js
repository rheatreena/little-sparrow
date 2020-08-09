import React from 'react'
import {
  Timeline,
  Events,
  ImageEvent,
} from '@merc/react-timeline';
import logo  from "../../images/misc/medical_camp.jpg"
import logo1 from "../../images/misc/scholarship.jpeg"
export default function Journey() {
  return (
    <div className="container" >
    <Timeline className='vertical-timeline.vertical-timeline-custom-line'>
      <Events style={{color:'green'}}>
        <ImageEvent
          date="October,2019"
          text="we have started our journey with Borail Project"
          src ={logo} />

        <ImageEvent
          date="December, 2019"
          text="Upcoming Project 1: Medical Camp"
          src ={logo} />


        <ImageEvent
          date="May,2020"
          text="Upcoming Project 2: Education Scholarship"
          src={logo1}>
        </ImageEvent>
      </Events>
    </Timeline></div>
  );
}
