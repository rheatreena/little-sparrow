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
    <section>
    <Contact/>
    </section>
  </Layout>
)

export default ContactPage

