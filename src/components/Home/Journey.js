import React from 'react'
import {
  Timeline,
  Events,
  ImageEvent,
} from '@merc/react-timeline';
import logo  from "../../images/misc/medical_camp.jpg"
import logo1 from "../../images/misc/scholarship.jpeg"
import logo2 from  "../../images/Background/collage2.jpg"
import Layout from "../layout"
import SEO from "../seo"
export default function Journey() {
  return (
    <div className="container" >
    <Timeline className='vertical-timeline.vertical-timeline-custom-line'>
      <Events style={{color:'green'}}>
        <ImageEvent
          date="October,2019"
          text="we have started our journey"
          src ={logo} />

        <ImageEvent
          date="December, 2019"
          text=" upcoming"
          src ={logo} />


        <ImageEvent
          date="May,2020"
          text="Started helping for Amphan disaster"
          src={logo1}>
        </ImageEvent>
      </Events>
    </Timeline></div>
  );
}
