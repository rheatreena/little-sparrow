import React, { Component } from 'react'
import logo  from  "../../images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faLinkedinIn,
    faWhatsapp,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
import { black } from 'color-name';
export default class Navbar extends Component {
    state ={
        isNavbarOpen: false,
        css: 'collapse navbar-collapse',
        links: [
            {
            id: 1,
            path: '/',
            title: 'home'
            },
            {
            id: 2,
            path: '/journey',
            title: 'Our journey'
            },
            {
            id: 3,
            path: '/projects',
            title: 'Ongoing Projects'
            },
            {
            id: 4,
            path: '/donate',
            title: 'Donate'
            },
            {
                id: 5,
                path: '/contactPage',
               title: 'Contact  us'
               },


        ]

    }
    handleNavbar =() =>{
        this.state.isNavbarOpen? this.setState({isNavbarOpen:false, css: "collapse navbar-collapse"})
        :this.setState({

            isNavbarOpen:true,
            css: 'collapse navbar-collapse show'
        })
    };
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#14a098"}} >
                <div className ="collapse navbar-collapse">
                    <ul className = "nav navbar-nav mr-auto" style={{float:'none'}}>
                        {this.state.links.map(link => {
                            return(
                                <li key ={link.id } className = "nav-item">
                                    <Link to ={link.path} className ="nav-link text-capitalize" >
                                        {link.title}
                                    </Link>
                                </li>
                            )
                        })}
                        {/* <li className = "nav-item ml-sm -5">
                            <i className='fas fa-donate' ></i>
                        </li> */}
                    </ul>
                </div>
                <ul class="nav navbar-nav navbar-right">
               <li>
               <a href="https://www.linkedin.com/in/trina-pal-9a8a1139/" className ="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
               </li>
               <li>
               <a href="https://www.linkedin.com/in/trina-pal-9a8a1139/" className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
               </li>
               <li>
               <a href="https://www.linkedin.com/in/trina-pal-9a8a1139/" className="linkedIn social"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
               </li>
               <li>
               <a href="https://www.linkedin.com/in/trina-pal-9a8a1139/"  className="youtube social"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>

               </li>
            </ul>
                {/* <div className ="collapse navbar-collapse" style={{float:'right'}}>
                    <a href="#"  className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                      <a href="#" className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                     <a href="#/"  className="youtube social"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                       <a href="#/"  className="linkedin social"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
                       <a href="#/"  className="whatsapp social"><FontAwesomeIcon icon={faWhatsapp} size="2x" /></a>

                </div> */}
            </nav>
        )
    }
}
