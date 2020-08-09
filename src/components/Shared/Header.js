import React from 'react'
import logo  from  "../../images/logo_ls.png"
export default function Header() {
    return (
        <div className ="header py-1">
        <div style={{display:"inline-block",verticalAlign:"top"}}>
        <img src={logo} alt="logo" style ={{width:'110px' ,height:'120px'}}

        /* style={{position:'absolute',
   top:'0',
   left:'25px', maxHeight:'160px', display:"inline-block"}} */ /></div>
   <div style={{display:"inline-block",textAlign: 'justified',padding: '25px 0',fontFamily:'Arial',color:'#2b7a78'}}><h1 style={{display: 'inline'}}>Little Sparrow</h1></div>
        </div>

    )
}
