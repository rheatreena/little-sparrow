import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundBanner from "../components/Shared/BackgroundBanner"
import Contact from '../components/Home/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';


const Donate = ({data}) => (
  <Layout>
    <SEO title="Home"  keywords = {[`gatsby`,`application`,`react`]}/>

    <BackgroundBanner title = "Donate !"/>
    <div><h1>Work in progress</h1></div>
  </Layout>
)

export default Donate