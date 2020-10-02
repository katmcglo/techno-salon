import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from '../components/form/form';

const BookingPage = () => (
  <Layout>
    <SEO title="Booking" />
      <Form />
  </Layout>
)

export default BookingPage