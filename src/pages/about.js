import React from "react"
import classes from "../styles/about.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image';
import BackgroundImage from "gatsby-background-image";

const AboutPage = (props) => (
  <Layout>
    <SEO title="About" />
    <BackgroundImage
      fluid={props.data.secondImage.childImageSharp.fluid}
      style={{height: "100vh"}} 
    >
    <div style={{height: "100%", width: "80vw", margin: "auto", display: "grid", alignItems: "center", justifyItems: "center", gridTemplateColumns: "1fr"}}>
      <h1 style={{color: "white"}}>Our Team</h1>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", width: "80vw", margin: "auto", height: "20rem"}}>
        <div style={{ width: "80rem", height: "80%", maxHeight: "50rem", color: "black", display: "flex", alignItems: "stretch", padding: "2rem", backgroundColor: "white"}}>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
          <Img fluid={ props.data.image.childImageSharp.fluid } style={{ width: "20rem", height: "20rem" }}></Img>
      </div>
    </div>
  </BackgroundImage>
</Layout>
)



export default AboutPage

export const pageQuery = graphql`
  query {
    image: file(relativePath: {eq: "hairdresser.jpg"}) {
    id
    childImageSharp {
      fluid(maxWidth: 1800) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  secondImage: file(relativePath: {eq: "combs.jpg"}) {
    id
    childImageSharp {
      fluid(maxWidth: 1800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;