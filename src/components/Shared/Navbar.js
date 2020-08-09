import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
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
            path: '/journeyPage',
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
                <ul className="nav navbar-nav ml-auto">
                <li>
                    <a href="https://www.facebook.com/" className="nav-link" target="_blank" rel="noreferrer" style={{color: '#3b5998'}}><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                   <li>
                   <a href="https://www.youtube.com/" className="nav-link" target="_blank"  rel="noreferrer" style={{color: '#FF0000'}}><FontAwesomeIcon icon={faYoutube} size="2x" /></a>

                       </li>
                       <li>
                    <a href="https://www.twitter.com/" className="nav-link" target="_blank"  rel="noreferrer" style={{color: '#00acee'}}><FontAwesomeIcon icon={faTwitter} size="2x" /></a></li>
                   <li>
                   <a href="https://www.linkedin.com/" className="nav-link" target="_blank"   rel="noreferrer" style={{color:'#0e76a8'}}><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>

                       </li>

                </ul>
            </nav>
        )
    }
}
