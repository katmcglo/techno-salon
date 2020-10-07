import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Masonry from 'react-masonry-css'
import classes from '../styles/gallery.module.scss';

const GalleryPage = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: 
        "progallery" } }) {
          nodes {
            id
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
          }
        }
      image: file(relativePath: {eq: "progallery/pexels-1.jpg"}) {
        id
        childImageSharp {
          fixed(
            width: 400
            ) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      } 
    }
  `)

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  console.log(data);

  return(
  <Layout>
    <SEO title="Image Gallery" />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={classes.MyMasonryGrid}
        columnClassName={classes.MyMasonryGridColumn}>
        {data.images.nodes.map(image => (
          <Img key={image.childImageSharp.id} fixed={image.childImageSharp.fixed} />
        ))}
      </Masonry>
    {/* <div>
      {data.images.nodes.map(image => (
        <Img key={image.childImageSharp.id} fixed={image.childImageSharp.fixed} />
      ))}
    </div> */}
  </Layout>
  )
}


export default GalleryPage