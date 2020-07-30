import React from 'react'
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
} from '@merc/react-timeline';
import logo  from  "../../images/Background/collage3.png"
import logo1 from  "../../images/Background/collage2.jpg"
export default function Journey() {
  return (
    <div className="container" style ={{border:'5px solid black'}}>
    <Timeline>
      <Events>
        <ImageEvent
          date="October,2019"
          text="we have started our journey"
          src ={logo} />

        <TextEvent
          date="December, 2019"
          text=" We started helping Borail ngo"
        />

        <ImageEvent
          date="May,2020"
          text="Started helping for Amphan disaster"
          src={logo1}>
        </ImageEvent>

        <YouTubeEvent
          date="July,2020"
          id="BLnaaIBeDaE"
          text="Visited Borail children"
        />
      </Events>
    </Timeline></div>
  );
}
