import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BackgroundBanner = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {

      if (index === 2) { // total number of images minus 1
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000); //duration
    return () => clearInterval(timer); //cleanup
  }, [index]); //compare

  // filter by sub-directory name slideshow
  const allImagesQuery = graphql`
    query {

        allFile(filter: {sourceInstanceName: {eq: "background"},
        extension: {regex: "/(jpg)|(png)|(jpeg)/"}}) {
    totalCount
    edges {
        node {
        base
        childImageSharp {
            fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
        }
    }
}
    }
  `
  const {
    allFile: { edges: images }, //destructuring
  } = useStaticQuery(allImagesQuery)

  return(
          <div className="wrapper">
          <Img id ="slider"
            style={{backgroundPosition: 'top',height:'750px',backgrondSize:'auto', animation: 'slide 0.5s forwards',
              animationDelay: '2s'
          }}
            fluid={images[index].node.childImageSharp.fluid}
            alt={images[index].node.base.split(".")[0]}
        />

        </div>

  )
}

export default BackgroundBanner
