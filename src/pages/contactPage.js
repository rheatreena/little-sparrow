import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundBanner from "../components/Shared/BackgroundBanner"
import Contact from '../components/Home/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';


const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home"  keywords = {[`gatsby`,`application`,`react`]}/>
    <div style={{backgroundColor:'#def2f1', height: '1050px',
        width: '100%'}}>
    <section>
    <Contact/>
    </section></div>
  </Layout>
)

export default ContactPage

