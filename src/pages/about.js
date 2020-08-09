import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from '../components/Home/Info'
import 'bootstrap/dist/css/bootstrap.min.css';


const AboutPage = () => (
  <Layout>
    <SEO title="Home"  keywords = {[`gatsby`,`application`,`react`]}/>

    <Info/>
  </Layout>
)


export default AboutPage

