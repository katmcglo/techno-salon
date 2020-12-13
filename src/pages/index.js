import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import classes from "../components/backgroundimage/background-image.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BookButton from "../components/bookbutton/bookbutton"
import { myContext } from '../../provider';
import NavigationDropdownButton from "../components/navigationdropdownbutton/navigationdropdownbutton"

const IndexPage = (props) => (
  <Layout 
  style={{height: `100%`}}
  location={props.location.pathname}
  >
    <myContext.Consumer>
      {context => (
        <React.Fragment>
          <SEO title="Home" />
          <div style={{height: "100vh", position: "relative"}}>
            <div className={classes.Overlay}>
              <div style={{"padding": "0 1rem 0 2rem"}}>
                <h1>Cutting Shapes</h1>
                <p style={{fontWeight: "bold"}}>Friseurstraße 42, Neukölln 10967 Berlin</p>
              </div>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <NavigationDropdownButton 
                onClick={() => context.toggleSideDrawer()}
                location={props.location.pathname} 
                />
                <BookButton
                location={props.location.pathname}
                ></BookButton>
              </div>
              
            </div>
            <BackgroundImage
              className={classes.BannerHome}
              fluid={props.data.indexImage.childImageSharp.fluid}
            />
          </div>
        </React.Fragment>
      )}
    </myContext.Consumer>
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
