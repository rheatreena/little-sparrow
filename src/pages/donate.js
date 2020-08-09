import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundBanner from "../components/Shared/BackgroundBanner"
import Donation from '../components/Home/Donation'
import 'bootstrap/dist/css/bootstrap.min.css';


const Donate = ({data}) => (
  <Layout>
    <SEO title="Home"  keywords = {[`gatsby`,`application`,`react`]}/>
    <div style={{backgroundColor:'#def2f1', height: '1050px',
      width: '100%'}}>
  <Donation/>

    </div>
  </Layout>


)

export default Donate