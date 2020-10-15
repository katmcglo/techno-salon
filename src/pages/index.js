import React from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import classes from "../components/backgroundimage/background-image.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BookButton from "../components/bookbutton/bookbutton"
import { myContext } from '../../provider';
import NavigationDropdownButton from "../components/navigationdropdownbutton/navigationdropdownbutton"

const IndexPage = (props) => (
  <Layout style={{height: `100%`}}>
    <myContext.Consumer>
      {context => (
        <React.Fragment>
          <SEO title="Home" />
          <BackgroundImage
            className={classes.BannerHome}
            fluid={props.data.indexImage.childImageSharp.fluid}
          >
            <NavigationDropdownButton onClick={() => context.toggleSideDrawer()} />
            <BookButton></BookButton>
          </BackgroundImage>
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
