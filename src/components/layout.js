import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import './bootstrap.min.css'

import Navbar from "./Shared/Navbar"
import Footer from "./Shared/Footer"
import Header from "./Shared/Header"
const Layout = ({ children }) => <>
<Header/>
<Navbar/>
 {children}
 <Footer/>
</>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
