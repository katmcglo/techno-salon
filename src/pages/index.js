import React from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import classes from "../components/BackgroundImage/background-image.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BookButton from "../components/bookbutton/bookbutton"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundImage
      className={classes.BannerHome}
      fluid={props.data.indexImage.childImageSharp.fluid}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} 
    >
      <BookButton></BookButton>
    </BackgroundImage>
    <Link to="/page-2">about</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "banner-homepage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
