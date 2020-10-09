import React from "react"
import classes from "../styles/about.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image';

const AboutPage = (props) => (
  <Layout>
    <SEO title="About" />
    <div className={classes.Header}>
      <h2>About Our Team</h2>
    </div>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh"}}>
      <div style={{width: "30rem", height: "80%", maxHeight: "50rem", color: "black", display: "flex", alignItems: "stretch", padding: "2rem"}}>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
      <Img fluid={props.data.image.childImageSharp.fluid} style={{width: "40%", height: "80%", maxHeight: "60rem"}}></Img>
    </div>
    
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
  }
}
`;