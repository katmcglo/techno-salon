// import React from 'react'
// import { graphql, StaticQuery } from 'gatsby'
// import BackgroundImage from 'gatsby-background-image'

// const BackgroundSection = ( { className } ) => (
//   <StaticQuery
//     query={graphql`
//       desktop: file(relativePath: { eq: "banner-homepage.jpg" }) {
//         childImageSharp {
//           fluid(quality: 90, maxWidth: 1920) {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//     }
//   `}
//     render={data => {
//       const imageData = data.desktop.childImageSharp.fluid
//       return (
//         <BackgroundImage
//           Tag="section"
//           className={className}
//           fluid={imageData}
//           backgroundColor={`#040e18`}
//         >
//           <h2>gatsby-background-image</h2>
//         </BackgroundImage>
//       )
//     }}
//   />
// )

// const StyledBackgroundSection = styled(BackgroundSection)`
//   width: 100%;
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
//   `

//   export default StyledBackgroundSection