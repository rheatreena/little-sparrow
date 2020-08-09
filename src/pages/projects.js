import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from '../components/Home/Project'
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectPage = ({data}) => (
    <Layout>
      <SEO title="Home"  keywords = {[`gatsby`,`application`,`react`]}/>
      <div style={{backgroundColor:'#def2f1', height: '1050px',
        width: '100%'}}>
        <Project items = {data.menu}/></div>
    </Layout>
  )

  export const graphQuery = graphql `
{
  menu: allContentfulProject {
    edges {
      node {
        id
        title
        description
        images {
          fixed(width:200, height: 200) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}`
export default ProjectPage

