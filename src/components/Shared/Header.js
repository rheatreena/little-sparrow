import React, { Component } from "react"
import logo  from  "../../images/logo_ls.png"
import { isMobile } from "react-device-detect";
class Header extends Component {
    render() {
      if (isMobile) {
        return (
          <div className="header py-sm-0">
          <div style={{ display: "inline-block", verticalAlign: "top" }}>
      <img src={logo} alt="logo" style={{ width: '50px', height: '60px' }} /></div>
        <div style={{
          display: "inline-block",
            textAlign: 'justified',
            padding: '5px 0',
            fontFamily: 'Arial',
            color: '#2b7a78'
        }}><h1 style={{ display: 'inline' ,fontSize:'18px'}}>Little Sparrow</h1></div>
        </div>

      )


      } else {
        return (

          <div className="header py-1">
            <div style={{ display: "inline-block", verticalAlign: "top" }}>
              <img src={logo} alt="logo" style={{ width: '110px', height: '120px' }}/* style={{position:'absolute',
   top:'0',
   left:'25px', maxHeight:'160px', display:"inline-block"}} */ /></div>
            <div style={{
              display: "inline-block",
              textAlign: 'justified',
              padding: '25px 0',
              fontFamily: 'Arial',
              color: '#2b7a78'
            }}><h1 style={{ display: 'inline' }}>Little Sparrow</h1></div>
          </div>

        )
      }
    }
}

export default Header