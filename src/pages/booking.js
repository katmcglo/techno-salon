import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from '../components/form/form'
import classes from '../components/container/container.module.scss'
import BackgroundImage from "gatsby-background-image"



const BookingPage = (props) => (
  <Layout>
    <SEO title="Booking" />
      <BackgroundImage
        fluid={props.data.image.childImageSharp.fluid}
      style={{ minHeight: "100vh", backgroundAttachment: "fixed", position: "sticky", backgroundSize: "auto", width: "100%"}}
      >
      <div className={classes.Container}>
        <h1 className={classes.BookingHeader}>Book</h1>
        <Form />
      </div>
    </BackgroundImage>
  </Layout>
)

export default BookingPage;

export const pageQuery = graphql`
  query {
  image: file(relativePath: {eq: "scissors.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1800, grayscale: true) {
        base64
        tracedSVG
        srcWebp
        srcSetWebp
        originalImg
        originalName
      }
    }
  }
}
`;
