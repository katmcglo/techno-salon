import React from "react"
import classes from "../styles/about.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card/card"
import BackgroundImage from "gatsby-background-image";

const AboutPage = (props) => (
  <Layout>
    <SEO title="About" />
    <BackgroundImage
      fluid={props.data.secondImage.childImageSharp.fluid}
      style={{height: "100vh"}} 
    >
    <div style={{ height: "80%", width: "80vw", margin: "auto", display: "grid", alignItems: "center", justifyItems: "center"}}>
      <h1 style={{color: "white",}}>Our Team</h1>
        <Card 
          fluid={props.data.image.childImageSharp.fluid}
          header={"Suzie"}
          text={"Suzie is a pro with the snippers and a real' talkative broad. "}
        />
        <Card
          fluid={props.data.image.childImageSharp.fluid}
          header={"Suzie"}
          text={"Suzie is a pro with the snippers and a real' talkative broad. "}
        />
        <Card
          fluid={props.data.image.childImageSharp.fluid}
          header={"Suzie"}
          text={"Suzie is a pro with the snippers and a real' talkative broad. "}
        />
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
      fluid(maxWidth: 1800, grayscale: true) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;