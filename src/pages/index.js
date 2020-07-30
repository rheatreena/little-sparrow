import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundBanner from "../components/Shared/BackgroundBanner"
import Info from '../components/Home/Info'
import Project from '../components/Home/Project'
import Contact from '../components/Home/Contact'
import GalleryPage from '../components/Home/GalleryPage'
import {Carousel} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import BackgroundImage from 'gatsby-background-image'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home"  keywords = {[`gatsby`,`application`,`react`]}/>

    <BackgroundBanner />
    {/* <Carousel>
  <Carousel.Item>
      <BackgroundImage fluid = {data.img1.childImageSharp.fluid}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <BackgroundImage fluid = {data.img1.childImageSharp.fluid}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel> */}
    <Info/>
<GalleryPage/>
    {/* <Contact/> */}
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
export default IndexPage
