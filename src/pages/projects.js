import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundBanner from "../components/Shared/BackgroundBanner"
import Project from '../components/Home/Project'
import ProjectDetails from '../components/Home/ProjectDetails'
import 'bootstrap/dist/css/bootstrap.min.css';


/*const ProjectPage = ({data}) => {
  //console.log(data.menu.edges.length)
  //console.log(data.menu.edges.map((item) => Object.values(item).map(each => each.title)))
  <Layout>
  <SEO title="Home"  keywords = {[`gatsby`,`application`,`react`]}/>

  <BackgroundBanner title = "contact !"/>
  <Contact/>
</Layout>

})

{/* <div className="timeline-item">
<div className="timeline-item-content">
    <span className="tag" style={{ background: data.menu.color }}>
        {data.category.tag}
    </span>
    <time>{data.date}</time>
    <p>{data.text}</p>
    {data.link && (
        <a
            href={data.link.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {data.link.text}
        </a>
    )}
    <span className="circle" />
</div>
</div>
 */
const ProjectPage = ({data}) => (
    <Layout>
      <SEO title="Home"  keywords = {[`gatsby`,`application`,`react`]}/>
      <Project items = {data.menu}/>
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

