import React from "react"
// import classes from "../styles/about.module.scss"
import classes from "../styles/page2.module.scss";
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
      <div className={classes.Header}>
        <h1>Meet Our Team</h1>
      </div>
      <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center" }}>
        <div className={classes.Container}>
          <Card
            fluid={props.data.image.childImageSharp.fluid}
            header={"Suzie"}
            text={"Suzie is a real pro with the snippers, she's only ever lost one ear!"}
          />
          <Card
            fluid={props.data.daniel.childImageSharp.fluid}
            header={"Daniel"}
            text={"Daniel trained under the best in NYC, London, Paris - winning competitions all over the globe. Unfortunately, this was in his former career as a pastry chef, not as a hairdresser - something he is significantly less talented at."}
          />
          <Card
            fluid={props.data.lucy.childImageSharp.fluid}
            header={"Lucy"}
            text={"Lucy doles out the sickest fades - whether you like it or not!"}
          />
        </div>
      </div>
  </BackgroundImage>
</Layout>
)



export default AboutPage

export const pageQuery = graphql`
  query {
    image: file(relativePath: {eq: "suzie.jpg"}) {
    id
    childImageSharp {
      fluid(maxWidth: 1800) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  daniel: file(relativePath: {eq: "dancard.jpg"}) {
    id
    childImageSharp {
      fluid(maxWidth: 1800) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  lucy: file(relativePath: {eq: "lucycard.jpg"}) {
    id
    childImageSharp {
      fluid(maxWidth: 1800) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  secondImage: file(relativePath: {eq: "combss.jpg"}) {
    id
    childImageSharp {
      fluid(maxWidth: 1800, duotone: { highlight: "#080808", shadow: "#585858"}) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;