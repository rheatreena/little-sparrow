import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundBanner from "../components/Shared/BackgroundBanner"
import Info from '../components/Home/Info'
import 'bootstrap/dist/css/bootstrap.min.css';


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home"  keywords = {[`gatsby`,`application`,`react`]}/>

    <BackgroundBanner title = "about us !"/>
    <Info/>
  </Layout>
)


export default AboutPage

