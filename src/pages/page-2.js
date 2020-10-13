import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div style={{ display: "grid", alignItems: "center", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr)"}}>
      <div style={{ width: "200px", height: "200px", backgroundColor: "green" }}></div>
      <div style={{ width: "200px", height: "200px", backgroundColor: "red" }}></div>
      <div style={{ width: "300px", height: "400px", backgroundColor: "blue" }}></div>
      <div style={{ width: "200px", height: "200px", backgroundColor: "green" }}></div>
      <div style={{ width: "200px", height: "200px", backgroundColor: "red" }}></div>
      <div style={{ width: "300px", height: "400px", backgroundColor: "blue" }}></div>
    </div>
    
  </Layout>
)

export default SecondPage
